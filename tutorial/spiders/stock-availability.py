from datetime import datetime, timezone
import scrapy
import json


class StockAvailabilitySpider(scrapy.Spider):
    name = "stock-availability"
    start_urls = [
        f"https://iows.ikea.com/retail/iows/de/de/stores/{store_id}/availability/ART/{article_id}"
        for store_id in [
            "066",  # Augsburg
            "328",  # Ulm
            "343",  # München Brunntal
            "063",  # München Eching
        ]
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
            "40070185",  # BEKVÄM Gewürzregal
            "40279731",  # BOTKYRKA Wandregal 80x20 cm
            "20337398",  # SINNLIG Duftkerze im Glas 7.5 cm
            "90292103",  # MOSSLANDA Bilderleiste 115 cm
            "30403571",  # MALM Kommode mit 4 Schubladen 80x100 cm (Weiß)
            "70403574",  # ^ Eiche
            "70403569",  # ^ Braun
            "30403566",  # ^ Schwarz
            "90482513",  # ^ Grau
            "50424054",  # ^ Weiß, hochglanz
            "20403562",  # MALM Kommode mit 3 Schubladen 80x78 cm (Weiß)
            "80403564",  # ^ Eiche
            "80403559",  # ^ Braun
            "20403557",  # ^ Schwarz
            "10482512",  # ^ Grau
            "40450270",  # ^ Rot
            "70424053",  # ^ Weiß, hochglanz
            "60403602",  # MALM Kommode mit 6 Schubladen 80x123 cm
            "90403605",  # ^ Eiche
            "40403599",  # ^ Braun
            "70403606",  # ^ Schwarz
            "40482515",  # ^ Grau
            "60403584",  # MALM Kommode mit 6 Schubladen 160x78 cm
            "90403587",  # ^ Eiche
            "00403582",  # ^ Braun
            "60403579",  # ^ Schwarz
            "70482514",  # ^ Grau
        ]
    ]

    def parse(self, response):
        result = json.loads(response.body)
        result["_fetched_at"] = datetime.now(timezone.utc).isoformat()
        yield result
