article_id := "30277959"
store_id := "328"
date := "2021-01-01"

build:
    gunzip data/*.gz --stdout | \
    jq -c --arg article_id {{ article_id }} --arg store_id {{ store_id }} ' \
    select( \
      (.StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring == $store_id) and \
      (.StockAvailability.ItemKey.ItemNo["$"] | tostring == $article_id) \
    ) | { \
      _fetched_at, \
      store_id: .StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring, \
      article_id: .StockAvailability.ItemKey.ItemNo["$"] | tostring, \
      available_stock: .StockAvailability.RetailItemAvailability.AvailableStock["$"] | tonumber, \
      forecast: .StockAvailability.AvailableStockForecastList.AvailableStockForecast | map({ (.ValidDateTime["$"]): .AvailableStock["$"] | tonumber }) \
    }' \
    > tmp/{{ article_id }}-{{ store_id }}.jsonl

filter:
    gunzip data/*.gz --stdout | \
    jq -c --arg article_id {{ article_id }} --arg store_id {{ store_id }} ' \
    select( \
      (.StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring == $store_id) and \
      (.StockAvailability.ItemKey.ItemNo["$"] | tostring == $article_id) \
    ) | { \
      _fetched_at, \
      store_id: .StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring, \
      article_id: .StockAvailability.ItemKey.ItemNo["$"] | tostring, \
      available_stock: .StockAvailability.RetailItemAvailability.AvailableStock["$"] | tonumber, \
      restock_date: .StockAvailability.RetailItemAvailability.RestockDateTime["$"] \
    }' | \
    gzip --stdout > tmp/{{ article_id }}-{{ store_id }}-restock.jsonl.gz

tmp-02:
    gunzip data/$(ls data | tail -n1) --stdout | \
    jq -c --arg article_id {{ article_id }} ' \
    select( \
      (.StockAvailability.ItemKey.ItemNo["$"] | tostring == $article_id) \
    ) | { \
      _fetched_at, \
      store_id: .StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring, \
      article_id: .StockAvailability.ItemKey.ItemNo["$"] | tostring, \
      available_stock: .StockAvailability.RetailItemAvailability.AvailableStock["$"] | tonumber, \
    }' | \
    tail -n 54 | \
    gzip --stdout > tmp/{{ article_id }}-latest.jsonl.gz
    # 54 ^= number of stores we're currently crawling

product:
    curl -s 'https://sik.search.blue.cdtapps.com/de/de/search-box?q={{ article_id }}' | \
    jq -c '.searchBox.universal[0].product' >> tmp/products.jsonl

stores:
     cat stores.json | \
     jq 'reduce .[] as $line ( {}; . + {($line.value): {name: $line.name, location: $line.storeLocation}} )'

store-list:
     cat stores.json | \
     jq -r '.[] | \
     (.storeUrl | sub("^/(?<country>[a-z]{2})/(?<language>[a-z]{2})/stores/(?<store_id>[0-9]{3})"; "(\"\(.country)\", \"\(.language)\", \"\(.store_id)\")")) + \
     ", # " + \
     (.name | sub("^IKEA "; "")) \
     '

stock:
    gunzip -c data/*.gz | \
    jq -c '{ \
      _fetched_at, \
      store_id: .StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring, \
      article_id: .StockAvailability.ItemKey.ItemNo["$"] | tostring, \
      stock: .StockAvailability.RetailItemAvailability.AvailableStock["$"] | tonumber \
    }' | \
    gzip -c > tmp/stock.jsonl.gz

stats:
    gzip -dc data/{{ date }}.jsonlines.gz | \
    jq -c ' \
    select( \
      (.StockAvailability.ItemKey.ItemNo["$"] | tostring == ("20438707", "30277959", "40474214", "60226039", "70235627", "70277957", "70340807", "80409537", "90272384")) \
    ) | { \
      identifier: ((._fetched_at[0:10]) + "|" + (.StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring) + "|" + (.StockAvailability.ItemKey.ItemNo["$"] | tostring)), \
      fetched_at: ._fetched_at, \
      store_id: .StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring, \
      article_id: .StockAvailability.ItemKey.ItemNo["$"] | tostring, \
      available_stock: .StockAvailability.RetailItemAvailability.AvailableStock["$"] | tonumber \
    }' | \
    jq -cs 'group_by(.identifier) | map(.[-1])[]' | \
    gzip -c > tmp/latest-{{ date }}.jsonl.gz

stats-summary:
    cat tmp/latest-*.gz > tmp/latest.jsonl.gz
