from datetime import datetime, timezone
import scrapy
import json


class StockAvailabilitySpider(scrapy.Spider):
    name = "stock-availability"
    start_urls = [
        f"https://iows.ikea.com/retail/iows/{country}/{language}/stores/{store_id}/availability/ART/{article_id}"
        for (country, language, store_id) in [
            ("de", "de", "066"),  # Augsburg
            ("de", "de", "324"),  # Berlin-Lichtenberg
            ("de", "de", "394"),  # Berlin-Spandau
            ("de", "de", "421"),  # Berlin-Tempelhof
            ("de", "de", "129"),  # Berlin-Waltersdorf
            ("de", "de", "119"),  # Bielefeld
            ("de", "de", "117"),  # Braunschweig
            ("de", "de", "412"),  # Bremerhaven
            ("de", "de", "228"),  # Brinkum
            ("de", "de", "118"),  # Chemnitz
            ("de", "de", "223"),  # Dortmund
            ("de", "de", "221"),  # Dresden
            ("de", "de", "425"),  # Duisburg
            ("de", "de", "321"),  # Düsseldorf
            ("de", "de", "396"),  # Erfurt
            ("de", "de", "148"),  # Essen
            ("de", "de", "393"),  # Frankfurt
            ("de", "de", "320"),  # Freiburg
            ("de", "de", "226"),  # Großburgwedel
            ("de", "de", "139"),  # Halle/Leipzig
            ("de", "de", "245"),  # Hamburg-Altona
            ("de", "de", "325"),  # Hamburg-Moorfleet
            ("de", "de", "146"),  # Hamburg-Schnelsen
            ("de", "de", "222"),  # Hanau
            ("de", "de", "187"),  # Hannover EXPO-Park
            ("de", "de", "494"),  # Kaarst
            ("de", "de", "430"),  # Kaiserslautern
            ("de", "de", "323"),  # Kamen
            ("de", "de", "551"),  # Karlsruhe
            ("de", "de", "174"),  # Kassel
            ("de", "de", "333"),  # Kiel
            ("de", "de", "332"),  # Koblenz
            ("de", "de", "102"),  # Köln-Butzweilerhof
            ("de", "de", "147"),  # Köln-Godorf
            ("de", "de", "289"),  # Lübeck
            ("de", "de", "225"),  # Ludwigsburg
            ("de", "de", "520"),  # Magdeburg
            ("de", "de", "397"),  # Mannheim
            ("de", "de", "343"),  # München-Brunnthal
            ("de", "de", "063"),  # München-Eching
            ("de", "de", "326"),  # Nürnberg/Fürth
            ("de", "de", "069"),  # Oldenburg
            ("de", "de", "184"),  # Osnabrück
            ("de", "de", "229"),  # Regensburg
            ("de", "de", "092"),  # Rostock
            ("de", "de", "227"),  # Saarlouis
            ("de", "de", "369"),  # Siegen
            ("de", "de", "224"),  # Sindelfingen
            ("de", "de", "328"),  # Ulm
            ("de", "de", "322"),  # Wallau
            ("de", "de", "075"),  # Walldorf
            ("de", "de", "493"),  # Wetzlar
            ("de", "de", "492"),  # Wuppertal
            ("de", "de", "124"),  # Würzburg
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
            "60226039",  # VARIERA Kasten für Küchenutensilien, Bambus, 20x50 cm
            "30242743",  # VARIERA Kasten für Küchenutensilien, Bambus, 32x50 cm
            "70235627",  # DRAGON Tortenheber, Edelstahl, 25 cm
            "20438707",  # RYET LED-Leuchtmittel E27 470 lm, rund opalweiß
            "40277992",  # KOMPLEMENT Boden, weiß, 50x35 cm
            "40204694",  # VARIERA Besteckkasten, Bambus, 52x50 cm
            "90204696",  # VARIERA Besteckkasten, Bambus, 32x50 cm
            "80409537",  # BEHÖVA Messbecher, transparent/grau, 1 l
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
            # "89268892",  # (S) SAGSTUA Bettgestell, 140x200 cm
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
            "60341015",  # EKEDALEN Stuhl
            "10329308",  # YUCCA ELEPHANTIPES Pflanze, Palmlilie/2 Stämme, 24 cm
            "80245051",  # STOCKHOLM 3er-Sofa, Seglora naturfarben
        ]
    ]

    def parse(self, response):
        result = json.loads(response.body)
        result["_fetched_at"] = datetime.now(timezone.utc).isoformat()
        yield result
