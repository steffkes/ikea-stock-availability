from datetime import datetime, timezone
import scrapy
import json


class IowsSpider(scrapy.Spider):
    name = "iows"

    def start_requests(self):
        for url in [
            "https://iows.ikea.com/retail/iows/%s/%s/stores/%s/availability/ART/%s"
            % (
                store["_locale"]["country"],
                store["_locale"]["language"],
                store["value"],
                article_id,
            )
            for store in self.settings["STORES"]
            for article_id in self.settings["PRODUCTS"]
        ]:
            yield scrapy.http.Request(url)

    def parse(self, response):
        if response.status == 200:
            result = json.loads(response.body)
            result["_fetched_at"] = datetime.now(timezone.utc).isoformat()
            yield result
