import pandas as pd

def flatten(stock):
   data = {}
   data["store_id"] = stock["ClassUnitKey"]["ClassUnitCode"]["$"]
   data["article_id"] = stock["ItemKey"]["ItemNo"]["$"]
   data["stock"] = stock["RetailItemAvailability"]["AvailableStock"]["$"]
   return pd.Series(data)

data = pd.read_json("/tmp/combined.jsonl.gz", lines=True, compression="gzip")
data = data.join(data["StockAvailability"].apply(flatten))
data = data.drop(columns=["StockAvailability"])
data["store_id"] = data["store_id"].astype(str)
data["article_id"] = data["article_id"].astype(str)
data.to_json("/tmp/stock.jsonl.gz", compression="gzip", orient="records", lines=True)
