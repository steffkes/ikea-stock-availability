from datetime import datetime, timezone
import scrapy
import json


class StockAvailabilitySpider(scrapy.Spider):
    name = "stock-availability"
    start_urls = [
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/70277957',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/60468561',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/30468478',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/10401931',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/80214568',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/50214560',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/20214571',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/70214559',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/30277959',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/60262659',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/10395925',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/50297485',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/70337701',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/00336267',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/60226039',
        'https://iows.ikea.com/retail/iows/de/de/stores/328/availability/ART/70235627'
    ]

    def parse(self, response):
        result = json.loads(response.body)
        result["_fetched_at"] = datetime.now(timezone.utc).isoformat()
        yield result
