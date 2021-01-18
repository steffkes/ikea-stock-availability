article_id := "30277959"
store_id := "328"

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

stock:
    gunzip -c data/*.gz | \
    jq -c '{ \
      _fetched_at, \
      store_id: .StockAvailability.ClassUnitKey.ClassUnitCode["$"] | tostring, \
      article_id: .StockAvailability.ItemKey.ItemNo["$"] | tostring, \
      stock: .StockAvailability.RetailItemAvailability.AvailableStock["$"] | tonumber \
    }' | \
    gzip -c > tmp/stock.jsonl.gz
