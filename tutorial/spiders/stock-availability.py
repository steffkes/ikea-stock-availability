from datetime import datetime, timezone
import scrapy
import json


class StockAvailabilitySpider(scrapy.Spider):
    name = "stock-availability"
    start_urls = [
        f"https://iows.ikea.com/retail/iows/de/de/stores/{store_id}/availability/ART/{article_id}"
        for store_id in [
            "066",  # Augsburg
            "324",  # Berlin-Lichtenberg
            "394",  # Berlin-Spandau
            "421",  # Berlin-Tempelhof
            "129",  # Berlin-Waltersdorf
            "119",  # Bielefeld
            "117",  # Braunschweig
            "412",  # Bremerhaven
            "228",  # Brinkum
            "118",  # Chemnitz
            "223",  # Dortmund
            "221",  # Dresden
            "425",  # Duisburg
            "321",  # Düsseldorf
            "396",  # Erfurt
            "148",  # Essen
            "393",  # Frankfurt
            "320",  # Freiburg
            "226",  # Großburgwedel
            "139",  # Halle/Leipzig
            "245",  # Hamburg-Altona
            "325",  # Hamburg-Moorfleet
            "146",  # Hamburg-Schnelsen
            "222",  # Hanau
            "187",  # Hannover EXPO-Park
            "494",  # Kaarst
            "430",  # Kaiserslautern
            "323",  # Kamen
            "551",  # Karlsruhe
            "174",  # Kassel
            "333",  # Kiel
            "332",  # Koblenz
            "102",  # Köln-Butzweilerhof
            "147",  # Köln-Godorf
            "289",  # Lübeck
            "225",  # Ludwigsburg
            "520",  # Magdeburg
            "397",  # Mannheim
            "343",  # München-Brunnthal
            "063",  # München-Eching
            "326",  # Nürnberg/Fürth
            "069",  # Oldenburg
            "184",  # Osnabrück
            "229",  # Regensburg
            "092",  # Rostock
            "227",  # Saarlouis
            "369",  # Siegen
            "224",  # Sindelfingen
            "328",  # Ulm
            "322",  # Wallau
            "075",  # Walldorf
            "493",  # Wetzlar
            "492",  # Wuppertal
            "124",  # Würzburg
        ]
        for article_id in [
            "70277957",
            "60468561",
            "30468478",
            "10401931",
            "80214568",  # PAX Korpus Kleiderschrank 50x58x236 cm (weiß)
            "90183991",  # ^ Eiche
            "40395981",  # ^ Braun
            "40121585",  # ^ Schwarz
            "50214560",  # PAX Korpus Kleiderschrank 100x58x236 cm (Weiß)
            "30183989",  # ^ Eiche
            "90121583",  # ^ Schwarz
            "80395979",  # ^ Braun
            "20214571",  # PAX Korpus Kleiderschrank 75x58x236 cm (weiß)
            "50183993",  # ^ Eiche
            "20395982",  # ^ Braun
            "70121584",  # ^ Schwarz
            "70214559",  # PAX Korpus Kleiderschrank 50x58x201 cm (weiß)
            "20201724",  # ^ Eiche
            "60396003",  # ^ Braun
            "50141390",  # ^ Schwarz
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
            "20214566",  # PAX Korpus Kleiderschrank 100x58x201 cm (weiß)
            "40201723",  # ^ Eiche
            "80396002",  # ^ Braun
            "30141391",  # ^ Schwarz
            "00214572",  # PAX Korpus Kleiderschrank 100x35x236 cm (weiß)
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
            "30372188",  # KALLAX Regal 42x112 cm (weiß)
            "00508471",  # ^ Eiche
            "00392847",  # ^ Schwarz
            "80275887",  # KALLAX Regal 77x147 cm (weiß)
            "00324518",  # ^ Eiche
            "40346924",  # ^ Grau
            "10459903",  # ^ Grün
            "20275885",  # ^ Schwarz
            "10305741",  # ^ Weiß, hochglanz
            "20275814",  # KALLAX Regal 77x77 cm (weiß)
            "60324520",  # ^ Eiche
            "60275812",  # ^ Schwarz
            "50305739",  # ^ Weiß, hochglanz
            "10409932",  # KALLAX Regal 112x147 cm (weiß)
            "40409935",  # ^ Eiche
            "20409936",  # ^ Schwarz
            "30275861",  # KALLAX Regal 147x147 cm (weiß)
            "10324513",  # ^ Eiche
            "10275862",  # ^ Schwarz
            "20305745",  # ^ Weiß, hochglanz
            "50468514",  # SMYCKA Kunstblumenstrauß
            "00473909",  # VINTER 2020 Geschenkpapierrolle 3x0.7 m
            "00474414",  # VINTER 2020 Kleberolle, 5 m
            "10475074",  # VINTER 2020 Dekoration, 35 cm
            "30474276",  # VINTER 2020 Geschenktüte für Flasche, 13x41 cm
            "20475993",  # VINTER 2020, Potpourri
            "40474214",  # VINTER 2020, Geschenkband 40m
            "90436314",  # FLOALT LED-Lichtpaneel, 30x30cm
            "90444366",  # ROSENSKÄRM Kissen erg./Seiten-/Rückenschläfer, 33x50 cm
            "30337393",  # SINNLIG Duftkerze im Glas, 7.5 cm
            "20236262",  # FANTASTISK Papierserviette, 40x40 cm
            "70342199",  # FJÄLLBO Regal, 51x136 cm
            "10447528",  # VÅRVIAL Spannbettlaken für Tagesbett, 80x200 cm
            # "80391882", # (S) SAXBORGA Kasten mit Spiegeldeckel, 24x17 cm
            "60420932",  # SAGSTUA Kopf- und Fußteil, schwarz, 140 cm
            "90124534",  # SKORVA Mittelbalken, verzinkt
            "40429410",  # SAGSTUA Bettseiten, schwarz, 200 cm
            "90272384",  # MATRAND Memoryschaummatratze, 140x200 cm
            "89268892",  # SAGSTUA Bettgestell, 140x200 cm
            "40349531",  # FEJKA Topfpflanze, künstlich, 9 cm
            "90292103",  # MOSSLANDA Bilderleiste, 115 cm
            # "50423257", # BERGPALM Bettwäscheset, 2-teilig, 140x200/80x80 cm
            "70340807",  # EKEDALEN Ausziehtisch, weiß, 120/180x80 cm
            "60341015",  # EKEDALEN Stuhl, weiß/Orrsta hellgrau
            # "19277036", # (S) MÖCKELBY / FANBYN Tisch und 6 Stühle, 235x100 cm
            "00293772",  # MÖCKELBY Tisch
            "00385069",  # FANBYN Gestell Stuhl
            "80389148",  # FANBYN Sitzschale
            # "39306288", # (S) LERHAMN Tisch und 2 Stühle, 74x74 cm
            "20259423",  # LERHAMN Stuhl
            "60444259",  # LERHAMN Tisch
            # "79296857", # (S) EKEDALEN Tisch und 4 Stühle, weiß/Orrsta hellgrau, 120/180 cm
            "70340807",  # EKEDALEN Ausziehtisch
            "60341015",  # EKEDALEN Stuhl
        ]
    ]

    def parse(self, response):
        result = json.loads(response.body)
        result["_fetched_at"] = datetime.now(timezone.utc).isoformat()
        yield result
