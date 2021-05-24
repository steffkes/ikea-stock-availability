import json
import gzip
import sys
import os

result = {}
date = sys.argv[1]

with gzip.open(f"data/iows/{date}.jsonlines.gz") as f:
    for line in f:
        record = json.loads(line)

        # there seem to be records that do not contain a store
        # also not really stock information at all.
        # ItemNo == 10329308
        if "ClassUnitCode" not in record["StockAvailability"]["ClassUnitKey"]:
            continue

        article_id = str(record["StockAvailability"]["ItemKey"]["ItemNo"]["$"])

        if article_id not in result:
            result[article_id] = {}

        store_id = str(
            record["StockAvailability"]["ClassUnitKey"]["ClassUnitCode"]["$"]
        )
        available_stock = int(
            record["StockAvailability"]["RetailItemAvailability"]["AvailableStock"]["$"]
        )
        result[article_id][store_id] = available_stock

for (article_id, data) in result.items():
    os.makedirs(f"public/data/{article_id}", exist_ok=True)
    with open(f"public/data/{article_id}/{date}.json", "w") as file:
        file.write(json.dumps(data))

with open(f"public/index.json", "w") as file:
    file.write(
        json.dumps(
            [
                os.path.splitext(filename)[0]
                for filename in sorted(os.listdir("public/data/70277957"))
            ],
            indent=2,
        )
    )
