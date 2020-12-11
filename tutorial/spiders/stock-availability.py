from datetime import datetime, timezone
import scrapy
import json


class StockAvailabilitySpider(scrapy.Spider):
    name = "stock-availability"
    start_urls = [
        f"https://iows.ikea.com/retail/iows/de/de/stores/{station_id}/availability/ART/{article_id}"
        for station_id in [328]
        for article_id in [
            "70277957",
            "60468561",
            "30468478",
            "10401931",
            "80214568",
            "50214560",
            "20214571",
            "70214559",
            "30277959",
            "60262659",
            "10395925",
            "50297485",
            "70337701",
            "00336267",
            "60226039",
            "70235627",
            "20438707",
            "40277992",
            "40204694",
            "90204696",
            "80409537",
            "20214566",
            "00214572",
            "40214565",
            "70214564",
        ]
    ]

    def parse(self, response):
        result = json.loads(response.body)
        result["_fetched_at"] = datetime.now(timezone.utc).isoformat()
        yield result
