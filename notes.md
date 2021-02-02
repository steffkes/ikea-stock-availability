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


stock availability summary

```
$ curl -s -D /dev/stderr 'https://api.ingka.ikea.com/cia/availabilities/ru/de?itemNos=30337393&expand=StoresList,Restocks' -H 'X-Client-ID: b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631' | jq
HTTP/2 200
content-type: application/json;version=1
vary: accept
cache-control: public, max-age=298
expires: Tue, 02 Feb 2021 22:10:17 GMT
date: Tue, 02 Feb 2021 22:05:19 GMT
content-length: 29256
strict-transport-security: max-age=15768000
x-content-type-options: nosniff
server: IKEA APIM
set-cookie: bm_sz=A1E675F40B46E70BB3AE73C350CCE367~YAAQd48UAiE3rmN3AQAACU7HZAqoik1mxgUScvR53YQw08hyVmNqZ7DDqKhfL5VCqG8X40hgbqLqGHkm5YnpdcLDA8M11Pt3BiVE362klmJyVl0pa2zDw0IghKyBWSchRa1DM2CddtVpuHak+jYyf9SNP4mDY7d6JX6dxXtKppAuBWwxT7UaxMWhugKRtA==; Domain=.ikea.com; Path=/; Expires=Wed, 03 Feb 2021 02:05:19 GMT; Max-Age=14400; HttpOnly
set-cookie: _abck=C388DEA6834E1CBF0A33949CC4C40531~-1~YAAQd48UAiI3rmN3AQAACU7HZAX8LrBK2UdOliXr4Rc32f0hzuML8992//HyPnlpqJn1Heze12Byp8KljI2aGeuTKrPZOfQudGc9boU04d0zI8o4r/9VBx/arElr9rW3ucXTGxV4cit9FNA1TjjupuxiRJi1CWzcvui9N3Yc1KwoHlpMreq9h+XouyNDxxhcrliV/NmI4L+N+Ot/0MzqtQF8kygwi4KUBMKbGDfxbjF9hiOVTmZzkp/ofD0rChvXPOwoSXLsUf45zKygnLJFBza1h09GbBupPnXUNMXd4JRrRe0BSsHyWA==~-1~-1~-1; Domain=.ikea.com; Path=/; Expires=Wed, 02 Feb 2022 22:05:19 GMT; Max-Age=31536000; Secure
```

```json
{
  "availabilities": null,
  "data": [
    {
      "isInCashAndCarryRange": true,
      "isInHomeDeliveryRange": false,
      "availableStocks": [
        {
          "type": "CASHCARRY",
          "quantity": 1636,
          "updateDateTime": "2021-02-02T21:56:15.272Z",
          "probabilities": [
            {
              "type": "THIS_DAY",
              "updateDateTime": "2021-02-02T21:56:15.272Z",
              "communication": {
                "colour": {
                  "rgbDec": "0,255,0",
                  "rgbHex": "00FF00"
                },
                "messageType": "HIGH_IN_STOCK"
              }
            }
          ]
        }
      ],
      "classUnitKey": {
        "classUnitCode": "063",
        "classUnitType": "STO"
      },
      "itemKey": {
        "itemNo": "30337393",
        "itemType": "ART"
      }
    },
    {
      "isInCashAndCarryRange": true,
      "isInHomeDeliveryRange": false,
      "availableStocks": [
        {
          "type": "CASHCARRY",
          "quantity": 1792,
          "updateDateTime": "2021-02-02T15:23:30.224Z",
          "probabilities": [
            {
              "type": "THIS_DAY",
              "updateDateTime": "2021-02-02T15:23:30.224Z",
              "communication": {
                "colour": {
                  "rgbDec": "0,255,0",
                  "rgbHex": "00FF00"
                },
                "messageType": "HIGH_IN_STOCK"
              }
            }
          ]
        }
      ],
      "classUnitKey": {
        "classUnitCode": "066",
        "classUnitType": "STO"
      },
      "itemKey": {
        "itemNo": "30337393",
        "itemType": "ART"
      }
    }
  ],
  "timestamp": "2021-02-02T22:05:19.229Z",
  "traceId": "11668189914947855088"
}
```

```
$ curl -s -D /dev/stderr 'https://api.ingka.ikea.com/cia/availabilities/ru/de?itemNos=30337393&expand=StoresList,Restocks' -H 'X-Client-ID: b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631' -H 'accept: application/json;version=2' | jq '.'
HTTP/2 200
content-type: application/json;version=2
vary: accept
cache-control: public, max-age=300
expires: Tue, 02 Feb 2021 22:25:10 GMT
date: Tue, 02 Feb 2021 22:20:10 GMT
content-length: 35763
strict-transport-security: max-age=15768000
x-content-type-options: nosniff
server: IKEA APIM
set-cookie: bm_sz=D9CB5AF6231D2C1C31B0D8554883F2E9~YAAQd48UApyVrmN3AQAAEOfUZArEml6bXrygzDHzvaYCoXtb8d4G3T7fS9OnmhDOlTZJE7RneCpTBh03ykxUReQH1DKCArPLtE9uJ8u5SYQsaQDl1m36p3ya/tWmLit+k3R8dIbix8T7ez7nitH06q+AnWUbEk4t3fs2DNEFWKHpzlP8iie/DhwzsB66zA==; Domain=.ikea.com; Path=/; Expires=Wed, 03 Feb 2021 02:20:10 GMT; Max-Age=14400; HttpOnly
set-cookie: _abck=1FD91D7A49107B65A85AF0CABF404182~-1~YAAQd48UAp2VrmN3AQAAEOfUZAW0wIjRGGOQfbvXFRYpe5bdkkHSBTqib+wsfRedo3VwscIBqAtChaDww3JMsYhFzporXNLgJvKHOLiX1b6RMo07jHg3hK+tAwe2csFNVyhC80dhGCzNmA5cEcOkX9TI5AhdlrcyC5WK9+IUVE0Rlmwm8Tp7jIMXnCLA+p4En/IxgNhIp/QLWL0/pm5P2uvDHA1C1dDmW1tkKLSEpmklksrJlLa4nSOT4UsrlzskuX0wVYpCyO4uHdN5iAtUd2kl49ITYfOHNShU/2xMHaZXrppudJrZ1w==~-1~-1~-1; Domain=.ikea.com; Path=/; Expires=Wed, 02 Feb 2022 22:20:10 GMT; Max-Age=31536000; Secure
```

```json
{
  "availabilities": [
    {
      "availableForCashCarry": true,
      "availableForClickCollect": true,
      "buyingOption": {
        "cashCarry": {
          "availability": {
            "probability": {
              "thisDay": {
                "colour": {
                  "rgbDec": "0,255,0",
                  "rgbHex": "00FF00"
                },
                "messageType": "HIGH_IN_STOCK"
              },
              "updateDateTime": "2021-02-02T21:56:15.272Z"
            },
            "quantity": 1636,
            "updateDateTime": "2021-02-02T21:56:15.272Z"
          },
          "range": {
            "inRange": true
          },
          "unitOfMeasure": "PIECE"
        },
        "clickCollect": {
          "range": {
            "inRange": true
          }
        },
        "homeDelivery": {
          "range": {
            "inRange": false
          }
        }
      },
      "classUnitKey": {
        "classUnitCode": "063",
        "classUnitType": "STO"
      },
      "itemKey": {
        "itemNo": "30337393",
        "itemType": "ART"
      }
    },
    {
      "availableForCashCarry": true,
      "availableForClickCollect": true,
      "buyingOption": {
        "cashCarry": {
          "availability": {
            "probability": {
              "thisDay": {
                "colour": {
                  "rgbDec": "0,255,0",
                  "rgbHex": "00FF00"
                },
                "messageType": "HIGH_IN_STOCK"
              },
              "updateDateTime": "2021-02-02T15:23:30.224Z"
            },
            "quantity": 1792,
            "updateDateTime": "2021-02-02T15:23:30.224Z"
          },
          "range": {
            "inRange": true
          },
          "unitOfMeasure": "PIECE"
        },
        "clickCollect": {
          "range": {
            "inRange": true
          }
        },
        "homeDelivery": {
          "range": {
            "inRange": false
          }
        }
      },
      "classUnitKey": {
        "classUnitCode": "066",
        "classUnitType": "STO"
      },
      "itemKey": {
        "itemNo": "30337393",
        "itemType": "ART"
      }
    }
  ],
  "data": null,
  "timestamp": "2021-02-02T22:20:10.354Z",
  "traceId": "18107531856260093576"
}
```
