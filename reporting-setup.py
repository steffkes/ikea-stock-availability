import pandas as pd

def flatten(stock):
   data = {}
   data["store_id"] = stock["ClassUnitKey"]["ClassUnitCode"]["$"]
   data["article_id"] = stock["ItemKey"]["ItemNo"]["$"]
   data["stock"] = stock["RetailItemAvailability"]["AvailableStock"]["$"]
   return pd.Series(data)

data = pd.read_json("/data/combined.jsonl", lines=True)
data = data.join(data["StockAvailability"].apply(flatten))
data = data.drop(columns=["StockAvailability"])
data["store_id"] = data["store_id"].astype(str)
data["article_id"] = data["article_id"].astype(str)
data.to_json("/data/stock.jsonl.gz", compression="gzip", orient="records", lines=True)
