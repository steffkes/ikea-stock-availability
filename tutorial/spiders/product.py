from datetime import datetime, timezone
import scrapy
import json


class ProductSpider(scrapy.Spider):
    name = "product"

    def start_requests(self):
        for record in [
            {"country": country, "language": language, "article_id": article_id}
            for (country, language) in list(
                set(
                    [
                        (store["_locale"]["country"], store["_locale"]["language"])
                        for store in self.settings["STORES"]
                    ]
                )
            )
            for article_id in self.settings["PRODUCTS"]
        ]:
            yield scrapy.http.Request(
                "https://www.ikea.com/%s/%s/products/%s/%s.json"
                % (
                    record["country"],
                    record["language"],
                    record["article_id"][-3:],
                    record["article_id"],
                ),
                meta={"record": record},
            )

    def parse(self, response):
        if response.status == 200:
            result = json.loads(response.body)
        elif response.status == 404:
            result = {}

        result["_meta"] = response.meta["record"]
        result["_status"] = response.status
        result["_fetched_at"] = datetime.now(timezone.utc).isoformat()
        yield result
