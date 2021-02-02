product details

```
curl -s -D /dev/stderr 'https://www.ikea.com/de/de/products/992/40277992.json' | jq '.'
HTTP/2 200
content-type: application/json
content-length: 1287
x-amz-replication-status: COMPLETED
last-modified: Sat, 23 Jan 2021 07:00:05 GMT
etag: "3eb90c12b1e562b9b229da633f9091fa"
x-amz-meta-md5: 3eb90c12b1e562b9b229da633f9091fa
x-amz-meta-shard:
x-amz-meta-edge-cache-tag: pub-de-de-products,pub-de-de-products-40277992,pub-de-de-products-992
x-amz-version-id: r6_HUCJ9d5IZPxiMirZRuwfsK0o.8USl
accept-ranges: bytes
x-amz-cf-pop: FRA56-C1
x-amz-cf-id: 2zbwn8comqzHcKk4xMUrvN4gPrOBm2PhxhaHMtixbeYxkrpWK-HbgA==
cache-control: max-age=164365
expires: Thu, 04 Feb 2021 18:42:51 GMT
date: Tue, 02 Feb 2021 21:03:26 GMT
server-timing: cdn-cache; desc=MISS
server-timing: edge; dur=-48
server-timing: origin; dur=67
x-content-type-options: nosniff
strict-transport-security: max-age=31536000
x-xss-protection: 1; mode=block
x-frame-options: SAMEORIGIN
server: IKEA Server
set-cookie: bm_sz=C23D817BC2ADEE5018F9A2B65FD99CF9~YAAQVbP3SNwV7T13AQAA4aiOZAopiDH+HyVsJWO8qshMy6PZKhbVq1M7Aml1SK8orADBrxyPAxVtOOCbsCO5M1NE7T6eC4UJzK0v4Kpfcfz3Xg7R3CyOAFdmhOYn6M9tSytUyxGZz60AdbCOpTasFqSwqihenWgzNZKohOBbFNUcd9n4wEvUmamF6n/h; Domain=.ikea.com; Path=/; Expires=Wed, 03 Feb 2021 01:03:26 GMT; Max-Age=14400; HttpOnly
set-cookie: _abck=D201363EB81DEF27887920278EB1D127~-1~YAAQVbP3SN0V7T13AQAA4aiOZAUFh3OULcNuAPeRkLIv18f/4CzgefqFMR9GIOjFuu+A32+3otkHQcmYJW+Q69x9435A6hKGAsUDR88Z30VkJbZ++2Fbb9D1RjdcXb3IyQpK/qJ6m/nHYZt3dZfazCocAkrGDD8/CzpgqM/v/cNzJd8rH6uFZg49saWEZOh+x/0reHQ1NaQ/tntHqEmw/BabUoSF0MV2L1zalpx66m75mnAa3RhEtx8JAOXgwOjo7sfwcS77mmf9DThidjKmXpbZQIMPMqtMR/iFZ9fF1wrzD0QzQyJaQw==~-1~-1~-1; Domain=.ikea.com; Path=/; Expires=Wed, 02 Feb 2022 21:03:26 GMT; Max-Age=31536000; Secure
```

```json
{
  "id": "40277992",
  "globalId": "40277992",
  "name": "KOMPLEMENT",
  "typeName": "Boden",
  "validDesignText": "weiß",
  "mainImage": {
    "alt": "KOMPLEMENT Boden, weiß, 50x35 cm",
    "id": "0721160_PE733090",
    "imageFileName": "0721160_PE733090_S5.JPG",
    "url": "https://www.ikea.com/de/de/images/products/komplement-boden-weiss__0721160_PE733090_S5.JPG",
    "type": "MAIN_PRODUCT_IMAGE"
  },
  "pipUrl": "https://www.ikea.com/de/de/p/komplement-boden-weiss-40277992/",
  "price": "4.00€",
  "priceNumeral": 4,
  "priceExclTax": "3.36€",
  "priceExclTaxNumeral": 3.36,
  "currencyCode": "EUR",
  "revampPrice": {
    "numDecimals": 2,
    "separator": ".",
    "integer": "4",
    "decimals": "00",
    "currencySymbol": "€",
    "currencyPrefix": "",
    "currencySuffix": "€",
    "hasTrailingCurrency": true,
    "currencySuffixZeroDecimals": false,
    "regularCurrency": true
  },
  "catalogRefs": {
    "products": {
      "id": "products",
      "name": "Produkte",
      "url": "https://www.ikea.com/de/de/cat/produkte-products/",
      "elements": [
        {
          "id": "19113",
          "name": "Einrichtung für PAX",
          "url": "https://www.ikea.com/de/de/cat/einrichtung-fuer-pax-19113/"
        }
      ]
    },
    "genericproducts": {
      "name": "Generic products",
      "id": "genericproducts",
      "elements": [
        {
          "name": "Kompl",
          "id": "genericproducts/28656",
          "type": "GENERIC PRODUCT",
          "url": "https://www.ikea.com/de/de/cat/kompl-28656/"
        }
      ],
      "url": "https://www.ikea.com/de/de/cat/generic-products-genericproducts/"
    }
  }
}
```

* https://www.ikea.com/dk/da/products/627/70235627.json
* https://www.ikea.com/dk/da/products/537/80409537.json
* https://www.ikea.com/dk/da/products/039/60226039.json
