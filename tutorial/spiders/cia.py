from datetime import datetime, timezone
import scrapy
import json


class CiaSpider(scrapy.Spider):
    name = "cia"

    def start_requests(self):
        for url in [
            "https://api.ingka.ikea.com/cia/availabilities/ru/%s?itemNos=%s&expand=StoresList,Restocks"
            % (country, article_id)
            for country in list(
                set([store["_locale"]["country"] for store in self.settings["STORES"]])
            )
            for article_id in self.settings["PRODUCTS"]
        ]:
            yield scrapy.http.Request(
                url,
                headers={
                    "X-Client-ID": "b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631",
                    "accept": "application/json;version=2",
                },
            )

    def parse(self, response):
        data = json.loads(response.body)
        for availability in data["availabilities"]:
            availability["_fetched_at"] = data["timestamp"]
            yield availability
