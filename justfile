article_id := "30277959"
store_id := "328"
filter := "select(.StockAvailability.ClassUnitKey.ClassUnitCode['$'] | tostring == '" + store_id + "' and .StockAvailability.ItemKey.ItemNo['$'] | tostring == '" + article_id + "') | {_fetched_at, store_id: .StockAvailability.ClassUnitKey.ClassUnitCode['$'] | tostring, article_id: .StockAvailability.ItemKey.ItemNo['$'] | tostring, available_stock: .StockAvailability.RetailItemAvailability.AvailableStock['$'] | tonumber, forecast: .StockAvailability.AvailableStockForecastList.AvailableStockForecast | map({ (.ValidDateTime['$']): .AvailableStock['$'] | tonumber })}"

build:
    gunzip data/*.gz --stdout | jq -c '{{ filter }}' > tmp/{{ article_id }}-{{ store_id }}.jsonl
