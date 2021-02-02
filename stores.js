const stores = [
// DE

  {
        value: '066',
        name: 'IKEA Augsburg',
        storeUrl: '/de/de/stores/066',
        storeLocation: {
          longitude: '10.871165',
          latitude: '48.404947'
        },
        storeAddress: {
          cityName: 'Gersthofen',
          address1: 'Otto-Hahn-Str. 99',
          zipCode: '86368'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999',
              storeContactMethodText: 'Phone'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Augsburg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '324',
        name: 'IKEA Berlin-Lichtenberg',
        storeUrl: '/de/de/stores/324',
        storeLocation: {
          longitude: '13.514063',
          latitude: '52.534041'
        },
        storeAddress: {
          cityName: 'Berlin',
          address1: 'Landsberger Allee 364',
          zipCode: '10365'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Phone'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Berlin-Lichtenberg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '394',
        name: 'IKEA Berlin-Spandau',
        storeUrl: '/de/de/stores/394',
        storeLocation: {
          longitude: '13.214343',
          latitude: '52.527997'
        },
        storeAddress: {
          cityName: 'Berlin',
          address1: 'Gewerbehof 10',
          zipCode: '13597'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Phone'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Berlin-Spandau">hier</a>.'
            }
          ]
        }
      },
      {
        value: '421',
        name: 'IKEA Berlin-Tempelhof',
        storeUrl: '/de/de/stores/421',
        storeLocation: {
          longitude: '13.365855',
          latitude: '52.469880'
        },
        storeAddress: {
          cityName: 'Berlin',
          address1: 'Sachsendamm 47',
          zipCode: '10829'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Berlin-Tempelhof">hier</a>.'
            }
          ]
        }
      },
      {
        value: '129',
        name: 'IKEA Berlin-Waltersdorf',
        storeUrl: '/de/de/stores/129',
        storeLocation: {
          longitude: '13.555562',
          latitude: '52.366900'
        },
        storeAddress: {
          cityName: 'Schönefeld',
          address1: 'Am Rondell 8',
          zipCode: '12529'
        },
        storeMapUrl: '/ms/de_DE/img/MLS_Storemaps/B_Waltersdorf_APP_1203.jpg',
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Phone'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Berlin-Waltersdorf">hier</a>.'
            }
          ]
        }
      },
      {
        value: '119',
        name: 'IKEA Bielefeld',
        storeUrl: '/de/de/stores/119',
        storeLocation: {
          longitude: '8.492475',
          latitude: '51.982224'
        },
        storeAddress: {
          cityName: 'Bielefeld',
          address1: 'Südring 7',
          zipCode: '33647'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Phone'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Bielefeld">hier</a>.'
            }
          ]
        }
      },
      {
        value: '117',
        name: 'IKEA Braunschweig',
        storeUrl: '/de/de/stores/117',
        storeLocation: {
          longitude: '10.504367',
          latitude: '52.308754'
        },
        storeAddress: {
          cityName: 'Braunschweig',
          address1: 'Hansestr. 27',
          zipCode: '38112'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Braunschweig">hier</a>.'
            }
          ]
        }
      },
      {
        value: '412',
        name: 'IKEA Bremerhaven',
        storeUrl: '/de/de/stores/412',
        storeLocation: {
          longitude: '8.601910',
          latitude: '53.493494'
        },
        storeAddress: {
          cityName: 'Bremerhaven',
          address1: 'Weserstr. 1i',
          zipCode: '27527'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999',
              storeContactMethodText: 'Telefon'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Bremerhaven">hier</a>.'
            }
          ]
        }
      },
      {
        value: '228',
        name: 'IKEA Brinkum',
        storeUrl: '/de/de/stores/228',
        storeLocation: {
          longitude: '8.803546',
          latitude: '53.026271'
        },
        storeAddress: {
          cityName: 'Stuhr – Brinkum',
          address1: 'Henleinstr. 1a',
          zipCode: '28816'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Brinkum">hier</a>.'
            }
          ]
        }
      },
      {
        value: '118',
        name: 'IKEA Chemnitz',
        storeUrl: '/de/de/stores/118',
        storeLocation: {
          longitude: '12.859647',
          latitude: '50.802463'
        },
        storeAddress: {
          cityName: 'Chemnitz',
          address1: 'Im Neefepark 5',
          zipCode: '09116'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Chemnitz">hier</a>.'
            }
          ]
        }
      },
      {
        value: '223',
        name: 'IKEA Dortmund',
        storeUrl: '/de/de/stores/223',
        storeLocation: {
          longitude: '7.368908',
          latitude: '51.491244'
        },
        storeAddress: {
          cityName: 'Dortmund',
          address1: 'Borussiastraße 120',
          zipCode: '44149'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Dortmund">hier</a>.'
            }
          ]
        }
      },
      {
        value: '221',
        name: 'IKEA Dresden',
        storeUrl: '/de/de/stores/221',
        storeLocation: {
          longitude: '13.695145',
          latitude: '51.086461'
        },
        storeAddress: {
          cityName: 'Dresden',
          address1: 'Peschelstr. 25',
          zipCode: '01139'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 9399999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Dresden">hier</a>.'
            }
          ]
        }
      },
      {
        value: '425',
        name: 'IKEA Duisburg',
        storeUrl: '/de/de/stores/425',
        storeLocation: {
          longitude: '6.764252',
          latitude: '51.482412'
        },
        storeAddress: {
          cityName: 'Duisburg',
          address1: 'Beecker Str. 80',
          zipCode: '47166'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Duisburg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '321',
        name: 'IKEA Düsseldorf',
        storeUrl: '/de/de/stores/321',
        storeLocation: {
          longitude: '6.848602',
          latitude: '51.187763'
        },
        storeAddress: {
          cityName: 'Düsseldorf',
          address1: 'Oerschbachstr. 75',
          zipCode: '40589'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Düsseldorf">hier</a>.'
            }
          ]
        }
      },
      {
        value: '396',
        name: 'IKEA Erfurt',
        storeUrl: '/de/de/stores/396',
        storeLocation: {
          longitude: '10.949421',
          latitude: '50.959535'
        },
        storeAddress: {
          cityName: 'Erfurt',
          address1: 'Eisenacher Str. 50',
          zipCode: '99094'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Erfurt">hier</a>.'
            }
          ]
        }
      },
      {
        value: '148',
        name: 'IKEA Essen',
        storeUrl: '/de/de/stores/148',
        storeLocation: {
          longitude: '7.000179',
          latitude: '51.460371'
        },
        storeAddress: {
          cityName: 'Essen',
          address1: 'Altendorfer Str. 2',
          zipCode: '45127'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Essen">hier</a>.'
            }
          ]
        }
      },
      {
        value: '393',
        name: 'IKEA Frankfurt',
        storeUrl: '/de/de/stores/393',
        storeLocation: {
          longitude: '8.656883',
          latitude: '50.195515'
        },
        storeAddress: {
          cityName: 'Frankfurt',
          address1: 'Züricher Straße 7',
          zipCode: '60437'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Phone'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Frankfurt">hier</a>.'
            }
          ]
        }
      },
      {
        value: '320',
        name: 'IKEA Freiburg',
        storeUrl: '/de/de/stores/320',
        storeLocation: {
          longitude: '7.832801',
          latitude: '48.028882'
        },
        storeAddress: {
          cityName: 'Freiburg',
          address1: 'Hermann-Mitsch-Straße 61',
          zipCode: '79108'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: '.'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Freiburg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '226',
        name: 'IKEA Großburgwedel',
        storeUrl: '/de/de/stores/226',
        storeLocation: {
          longitude: '9.837956',
          latitude: '52.492436'
        },
        storeAddress: {
          cityName: 'Burgwedel',
          address1: 'Isernhägener Str. 14',
          zipCode: '30938'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Grossburgwedel">hier</a>.'
            }
          ]
        }
      },
      {
        value: '139',
        name: 'IKEA Halle/Leipzig',
        storeUrl: '/de/de/stores/139',
        storeLocation: {
          longitude: '12.183044',
          latitude: '51.348520'
        },
        storeAddress: {
          cityName: 'Leuna OT Kötschlitz',
          address1: 'Nordpark 17',
          zipCode: '06237'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Halle-Leipzig">hier</a>.'
            }
          ]
        }
      },
      {
        value: '245',
        name: 'IKEA Hamburg-Altona',
        storeUrl: '/de/de/stores/245',
        storeLocation: {
          longitude: '9.941504',
          latitude: '53.552165'
        },
        storeAddress: {
          cityName: 'Hamburg',
          address1: 'Lawaetzweg 7',
          zipCode: '22767'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Ruf uns an unter'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Hamburg-Altona">hier</a>.'
            }
          ]
        }
      },
      {
        value: '325',
        name: 'IKEA Hamburg-Moorfleet',
        storeUrl: '/de/de/stores/325',
        storeLocation: {
          longitude: '10.092938',
          latitude: '53.511237'
        },
        storeAddress: {
          cityName: 'Hamburg',
          address1: 'Unterer Landweg 77',
          zipCode: '22113'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Hamburg-Moorfleet">hier</a>.'
            }
          ]
        }
      },
      {
        value: '146',
        name: 'IKEA Hamburg-Schnelsen',
        storeUrl: '/de/de/stores/146',
        storeLocation: {
          longitude: '9.928164',
          latitude: '53.648950'
        },
        storeAddress: {
          cityName: 'Hamburg',
          address1: 'Wunderbrunnen 1',
          zipCode: '22457'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Hamburg-Schnelsen">hier</a>.'
            }
          ]
        }
      },
      {
        value: '222',
        name: 'IKEA Hanau',
        storeUrl: '/de/de/stores/222',
        storeLocation: {
          longitude: '8.942442',
          latitude: '50.149819'
        },
        storeAddress: {
          cityName: 'Hanau',
          address1: 'Oderstrasse 21',
          zipCode: '63452'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Hanau">hier</a>.'
            }
          ]
        }
      },
      {
        value: '187',
        name: 'IKEA Hannover EXPO-Park',
        storeUrl: '/de/de/stores/187',
        storeLocation: {
          longitude: '9.817421',
          latitude: '52.313595'
        },
        storeAddress: {
          cityName: 'Hannover',
          address1: 'Strasse der Nationen 10',
          zipCode: '30539'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Hannover">hier</a>.'
            }
          ]
        }
      },
      {
        value: '494',
        name: 'IKEA Kaarst',
        storeUrl: '/de/de/stores/494',
        storeLocation: {
          longitude: '6.640966',
          latitude: '51.211061'
        },
        storeAddress: {
          cityName: 'Kaarst',
          address1: 'Hans-Dietrich-Genscher-Straße 1',
          zipCode: '41564'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Kaarst">hier</a>.'
            }
          ]
        }
      },
      {
        value: '430',
        name: 'IKEA Kaiserslautern',
        storeUrl: '/de/de/stores/430',
        storeLocation: {
          longitude: '7.695360',
          latitude: '49.437424'
        },
        storeAddress: {
          cityName: 'Kaiserslautern',
          address1: 'Opelkreisel 3',
          zipCode: '67663'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999',
              storeContactMethodText: 'Telefon'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/kaiserslautern">hier</a>.'
            }
          ]
        }
      },
      {
        value: '323',
        name: 'IKEA Kamen',
        storeUrl: '/de/de/stores/323',
        storeLocation: {
          longitude: '7.669101',
          latitude: '51.569695'
        },
        storeAddress: {
          cityName: 'Kamen',
          address1: 'Kamen Karree 1',
          zipCode: '59174'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Kamen">hier</a>.'
            }
          ]
        }
      },
      {
        value: '551',
        name: 'IKEA Karlsruhe',
        storeUrl: '/de/de/stores/551',
        storeLocation: {
          longitude: '38.925',
          latitude: '45.0125'
        },
        storeAddress: {
          address1: 'karlsruhe'
        },
        timeZone: 'Europe/Berlin'
      },
      {
        value: '174',
        name: 'IKEA Kassel',
        storeUrl: '/de/de/stores/174',
        storeLocation: {
          longitude: '9.525447',
          latitude: '51.277461'
        },
        storeAddress: {
          cityName: 'Kassel',
          address1: 'Heinrich-Hertz-Strasse 25',
          zipCode: '34123'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Kassel">hier</a>.'
            }
          ]
        }
      },
      {
        value: '333',
        name: 'IKEA Kiel',
        storeUrl: '/de/de/stores/333',
        storeLocation: {
          longitude: '10.106971',
          latitude: '54.314270'
        },
        storeAddress: {
          cityName: 'Kiel',
          address1: 'Westring 1',
          zipCode: '24114'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 - 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Kiel">hier</a>.'
            }
          ]
        }
      },
      {
        value: '332',
        name: 'IKEA Koblenz',
        storeUrl: '/de/de/stores/332',
        storeLocation: {
          longitude: '7.564516',
          latitude: '50.381707'
        },
        storeAddress: {
          cityName: 'Koblenz',
          address1: 'An der Römervilla 1',
          zipCode: '56070'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 9399999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Koblenz">hier</a>.'
            }
          ]
        }
      },
      {
        value: '102',
        name: 'IKEA Köln-Butzweilerhof',
        storeUrl: '/de/de/stores/102',
        storeLocation: {
          longitude: '6.900251',
          latitude: '50.982384'
        },
        storeAddress: {
          cityName: 'Köln',
          address1: 'Butzweilerstr. 51',
          zipCode: '50829'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Telefon:'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Köln-Butzweilerhof">hier</a>.'
            }
          ]
        }
      },
      {
        value: '147',
        name: 'IKEA Köln-Godorf',
        storeUrl: '/de/de/stores/147',
        storeLocation: {
          longitude: '6.971276',
          latitude: '50.861349'
        },
        storeAddress: {
          cityName: 'Köln',
          address1: 'Godorfer Hauptstr. 171',
          zipCode: '50997'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Köln-Godorf">hier</a>.'
            }
          ]
        }
      },
      {
        value: '289',
        name: 'IKEA Lübeck',
        storeUrl: '/de/de/stores/289',
        storeLocation: {
          longitude: '10.737548',
          latitude: '53.914753'
        },
        storeAddress: {
          cityName: 'Luebeck',
          address1: 'Dänischburger Landstraße 79-81',
          zipCode: '23569'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Lübeck">hier</a>.'
            }
          ]
        }
      },
      {
        value: '225',
        name: 'IKEA Ludwigsburg',
        storeUrl: '/de/de/stores/225',
        storeLocation: {
          longitude: '9.153950',
          latitude: '48.918579'
        },
        storeAddress: {
          cityName: 'Ludwigsburg',
          address1: 'Heinkelstraße 10',
          zipCode: '71634'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Ludwigsburg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '520',
        name: 'IKEA Magdeburg',
        storeUrl: '/de/de/stores/520',
        storeLocation: {
          longitude: '11.61184',
          latitude: '52.16676'
        },
        storeAddress: {
          cityName: 'Magdeburg',
          address1: 'Ebendorfer Chaussee 70',
          zipCode: '39128'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Magdeburg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '397',
        name: 'IKEA Mannheim',
        storeUrl: '/de/de/stores/397',
        storeLocation: {
          longitude: '8.444066',
          latitude: '49.555744'
        },
        storeAddress: {
          cityName: 'Mannheim',
          address1: 'Frankenthaler Straße 123',
          zipCode: '68307'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Mannheim">hier</a>.'
            }
          ]
        }
      },
      {
        value: '343',
        name: 'IKEA München-Brunnthal',
        storeUrl: '/de/de/stores/343',
        storeLocation: {
          longitude: '11.658297',
          latitude: '48.040648'
        },
        storeAddress: {
          cityName: 'Taufkirchen',
          address1: 'Brunnthaler Straße 1',
          zipCode: '82024'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999',
              storeContactMethodText: 'Telefon'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/München-Brunnthal">hier</a>.'
            }
          ]
        }
      },
      {
        value: '063',
        name: 'IKEA München-Eching',
        storeUrl: '/de/de/stores/063',
        storeLocation: {
          longitude: '11.633620',
          latitude: '48.304550'
        },
        storeAddress: {
          cityName: 'Eching',
          address1: 'Heisenbergstraße 14',
          zipCode: '85386'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/München-Eching">hier</a>.'
            }
          ]
        }
      },
      {
        value: '326',
        name: 'IKEA Nürnberg/Fürth',
        storeUrl: '/de/de/stores/326',
        storeLocation: {
          longitude: '11.009331',
          latitude: '49.485231'
        },
        storeAddress: {
          cityName: 'Fürth',
          address1: 'Hans-Vogel-Str. 110',
          zipCode: '90765'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Fürth">hier</a>.'
            }
          ]
        }
      },
      {
        value: '069',
        name: 'IKEA Oldenburg',
        storeUrl: '/de/de/stores/069',
        storeLocation: {
          longitude: '8.252749',
          latitude: '53.139292'
        },
        storeAddress: {
          cityName: 'Oldenburg',
          address1: 'Holler Landstr. 89',
          zipCode: '26135'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Oldenburg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '184',
        name: 'IKEA Osnabrück',
        storeUrl: '/de/de/stores/184',
        storeLocation: {
          longitude: '7.971268',
          latitude: '52.263075'
        },
        storeAddress: {
          cityName: 'Osnabrück',
          address1: 'Rheiner Landstrasse 215',
          zipCode: '49078'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Osnabrück">hier</a>.'
            }
          ]
        }
      },
      {
        value: '229',
        name: 'IKEA Regensburg',
        storeUrl: '/de/de/stores/229',
        storeLocation: {
          longitude: '12.177186',
          latitude: '49.002069'
        },
        storeAddress: {
          cityName: 'Regensburg',
          address1: 'Sulzfeldstr. 7',
          zipCode: '93055'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Regensburg">hier</a>.'
            }
          ]
        }
      },
      {
        value: '092',
        name: 'IKEA Rostock',
        storeUrl: '/de/de/stores/092',
        storeLocation: {
          longitude: '12.048569',
          latitude: '54.107232'
        },
        storeAddress: {
          cityName: 'Rostock',
          address1: 'Messestr. 25',
          zipCode: '18069'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Rostock">hier</a>.'
            }
          ]
        }
      },
      {
        value: '227',
        name: 'IKEA Saarlouis',
        storeUrl: '/de/de/stores/227',
        storeLocation: {
          longitude: '6.760068',
          latitude: '49.293841'
        },
        storeAddress: {
          cityName: 'Saarlouis',
          address1: 'Im Hader 1',
          zipCode: '66740'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Saarlouis">hier</a>.'
            }
          ]
        }
      },
      {
        value: '369',
        name: 'IKEA Siegen',
        storeUrl: '/de/de/stores/369',
        storeLocation: {
          longitude: '8.001995',
          latitude: '50.862920'
        },
        storeAddress: {
          cityName: 'Siegen',
          address1: 'Wallhausenstrasse 60',
          zipCode: '57072'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Siegen">hier</a>.'
            }
          ]
        }
      },
      {
        value: '224',
        name: 'IKEA Sindelfingen',
        storeUrl: '/de/de/stores/224',
        storeLocation: {
          longitude: '9.005785',
          latitude: '48.701229'
        },
        storeAddress: {
          cityName: 'Sindelfingen',
          address1: 'Hanns-Martin-Schleyer Str. 2',
          zipCode: '71063'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Sindelfingen">hier</a>.'
            }
          ]
        }
      },
      {
        value: '328',
        name: 'IKEA Ulm',
        storeUrl: '/de/de/stores/328',
        storeLocation: {
          longitude: '9.977002',
          latitude: '48.404263'
        },
        storeAddress: {
          cityName: 'Ulm',
          address1: 'Blaubeurer Str. 10',
          zipCode: '89077'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Ulm">hier</a>.'
            }
          ]
        }
      },
      {
        value: '322',
        name: 'IKEA Wallau',
        storeUrl: '/de/de/stores/322',
        storeLocation: {
          longitude: '8.371732',
          latitude: '50.058819'
        },
        storeAddress: {
          cityName: 'Hofheim-Wallau',
          address1: 'Am Wandersmann 2-4',
          zipCode: '65719'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.ikea.com/de/de/stores/wallau/">hier</a>.'
            }
          ]
        }
      },
      {
        value: '075',
        name: 'IKEA Walldorf',
        storeUrl: '/de/de/stores/075',
        storeLocation: {
          longitude: '8.629396',
          latitude: '49.305916'
        },
        storeAddress: {
          cityName: 'Walldorf',
          address1: 'Josef Reiert Straße 9',
          zipCode: '69190'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '06192 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Walldorf">hier</a>.'
            }
          ]
        }
      },
      {
        value: '493',
        name: 'IKEA Wetzlar',
        storeUrl: '/de/de/stores/493',
        storeLocation: {
          longitude: '8.49747',
          latitude: '50.56793'
        },
        storeAddress: {
          address1: 'Hermannsteiner Str. 13',
          address2: '35576 Wetzlar'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Wetzlar">hier</a>.'
            }
          ]
        }
      },
      {
        value: '492',
        name: 'IKEA Wuppertal',
        storeUrl: '/de/de/stores/492',
        storeLocation: {
          longitude: '7.251961',
          latitude: '51.308316'
        },
        storeAddress: {
          cityName: 'Wuppertal',
          address1: 'Schmiedestraße 81',
          zipCode: '42279'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Wuppertal">hier</a>.'
            }
          ]
        }
      },
      {
        value: '124',
        name: 'IKEA Würzburg',
        storeUrl: '/de/de/stores/124',
        storeLocation: {
          longitude: '9.983997',
          latitude: '49.820985'
        },
        storeAddress: {
          cityName: 'Würzburg',
          address1: 'Mainfrankenhöhe 2',
          zipCode: '97078'
        },
        timeZone: 'Europe/Berlin',
        storeContactInfo: {
          storeContactMethodList: [
            {
              storeContactMethodType: 'PHONE',
              phoneNo: '061 92 93 99999'
            }
          ],
          paragraphList: [
            {
              paragraphText: 'Aktuelle Informationen zu deinem IKEA Einrichtungshaus findest du <a href="https://www.IKEA.de/Würzburg">hier</a>.'
            }
          ]
        }
      },

// AT

{
                    value: "387",
                    name: "IKEA Graz",
                    storeUrl: "/at/de/stores/387",
                    storeLocation: {
                        longitude: "15.421565",
                        latitude: "47.033689"
                    },
                    storeAddress: {
                        cityName: "Graz",
                        address1: "Shopping Center West",
                        address2: "Weblinger Gürtel 31",
                        zipCode: "8054"
                    },
                    storeMapUrl: "/ms/de_AT/img/mobile/store_maps/387_storemap.jpg",
                    timeZone: "Europe/Vienna",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Aktuelle Informationen unter {1}"
                        }],
                        linkList: [{
                            linkName: "IKEA.at/graz",
                            linkUrl: "https://www.ikea.at/graz"
                        }]
                    }
                }, {
                    value: "388",
                    name: "IKEA Haid",
                    storeUrl: "/at/de/stores/388",
                    storeLocation: {
                        longitude: "14.250512",
                        latitude: "48.198076"
                    },
                    storeAddress: {
                        cityName: "Haid",
                        address1: "Haid Center",
                        address2: "IKEAplatz 1",
                        zipCode: "4053"
                    },
                    storeMapUrl: "/ms/de_AT/img/mobile/store_maps/388_storemap.jpg",
                    timeZone: "Europe/Vienna",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Aktuelle Informationen unter {1}"
                        }],
                        linkList: [{
                            linkName: "IKEA.at/haid",
                            linkUrl: "https://www.ikea.at/haid"
                        }]
                    }
                }, {
                    value: "273",
                    name: "IKEA Innsbruck",
                    storeUrl: "/at/de/stores/273",
                    storeLocation: {
                        longitude: "11.431081",
                        latitude: "47.261961"
                    },
                    storeAddress: {
                        cityName: "Innsbruck",
                        address1: "Amraser-See-Strasse 56c",
                        zipCode: "6020"
                    },
                    storeMapUrl: "/ms/de_AT/img/mobile/store_maps/innsbruck_store_plan.jpg",
                    timeZone: "Europe/Vienna",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Aktuelle Informationen unter {1}"
                        }],
                        linkList: [{
                            linkName: "IKEA.at/innsbruck",
                            linkUrl: "https://www.ikea.at/innsbruck"
                        }]
                    }
                }, {
                    value: "155",
                    name: "IKEA Klagenfurt",
                    storeUrl: "/at/de/stores/155",
                    storeLocation: {
                        longitude: "14.369097",
                        latitude: "46.639934"
                    },
                    storeAddress: {
                        cityName: "Klagenfurt",
                        address1: "IKEAplatz 1",
                        zipCode: "9020"
                    },
                    storeMapUrl: "/ms/de_AT/img/mobile/store_maps/155_storemap_klagenfurt.jpg",
                    timeZone: "Europe/Vienna",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Aktuelle Informationen unter {1}"
                        }],
                        linkList: [{
                            linkName: "IKEA.at/klagenfurt",
                            linkUrl: "https://www.ikea.at/klagenfurt"
                        }]
                    }
                }, {
                    value: "386",
                    name: "IKEA Salzburg",
                    storeUrl: "/at/de/stores/386",
                    storeLocation: {
                        longitude: "13.006268",
                        latitude: "47.819494"
                    },
                    storeAddress: {
                        cityName: "Salzburg",
                        address1: "Europastraße 5",
                        zipCode: "5020"
                    },
                    storeMapUrl: "/ms/de_AT/img/FY17/lsp/salzburg_3578x25551_storemapmobile.jpg",
                    timeZone: "Europe/Vienna",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Aktuelle Informationen unter {1}"
                        }],
                        linkList: [{
                            linkName: "IKEA.at/salzburg",
                            linkUrl: "https://www.ikea.at/salzburg"
                        }]
                    }
                }, {
                    value: "090",
                    name: "IKEA Wien Nord",
                    storeUrl: "/at/de/stores/090",
                    storeLocation: {
                        longitude: "16.47254",
                        latitude: "48.255641"
                    },
                    storeAddress: {
                        cityName: "Wien",
                        address1: "Gewerbepark Kagran",
                        address2: "Sverigestraße 1a",
                        zipCode: "1220"
                    },
                    storeMapUrl: "/ms/de_AT/img/mobile/store_maps/wiennord_1904x903_Storemapmobile090.jpg",
                    timeZone: "Europe/Vienna",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Aktuelle Informationen unter {1}"
                        }],
                        linkList: [{
                            linkName: "IKEA.at/wiennord",
                            linkUrl: "https://www.ikea.at/wiennord"
                        }]
                    }
                }, {
                    value: "085",
                    name: "IKEA Wien Vösendorf",
                    storeUrl: "/at/de/stores/085",
                    storeLocation: {
                        longitude: "16.317959",
                        latitude: "48.108692"
                    },
                    storeAddress: {
                        cityName: "Vösendorf",
                        address1: "Shopping City Süd",
                        address2: "Südring",
                        zipCode: "2334"
                    },
                    storeMapUrl: "/ms/de_AT/img/mobile/store_maps/085_storemap.jpg",
                    timeZone: "Europe/Vienna",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Aktuelle Informationen unter {1}"
                        }],
                        linkList: [{
                            linkName: "IKEA.at/voesendorf",
                            linkUrl: "https://www.ikea.at/voesendorf"
                        }]
                    }
                },

  // CH

  {
                    value: "078",
                    name: "IKEA Aubonne VD",
                    storeUrl: "/ch/de/stores/078",
                    storeLocation: {
                        longitude: "6.398978",
                        latitude: "46.477088"
                    },
                    storeAddress: {
                        cityName: "AUBONNE",
                        address1: "Pré-Neuf",
                        zipCode: "1170"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_aubonne.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                }, {
                    value: "291",
                    name: "IKEA Dietlikon ZH",
                    storeUrl: "/ch/de/stores/291",
                    storeLocation: {
                        longitude: "8.622379",
                        latitude: "47.414092"
                    },
                    storeAddress: {
                        cityName: "DIETLIKON",
                        address1: "Brandbach",
                        address2: "Moorstrasse 3",
                        zipCode: "8305"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_dietlikon_new1.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                }, {
                    value: "101",
                    name: "IKEA Grancia TI",
                    storeUrl: "/ch/de/stores/101",
                    storeLocation: {
                        longitude: "8.92637",
                        latitude: "45.972987"
                    },
                    storeAddress: {
                        cityName: "GRANCIA",
                        address1: "Centro Lugano Sud",
                        zipCode: "6916"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_grancia.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                }, {
                    value: "290",
                    name: "IKEA Lyssach BE",
                    storeUrl: "/ch/de/stores/290",
                    storeLocation: {
                        longitude: "7.567778",
                        latitude: "47.074009"
                    },
                    storeAddress: {
                        cityName: "LYSSACH",
                        address1: "Bernstrasse 25",
                        zipCode: "3421"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_lyssach.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                }, {
                    value: "292",
                    name: "IKEA Pratteln BL",
                    storeUrl: "/ch/de/stores/292",
                    storeLocation: {
                        longitude: "7.689443",
                        latitude: "47.527663"
                    },
                    storeAddress: {
                        cityName: "Pratteln",
                        address1: "Grüssenweg 21",
                        zipCode: "4133"
                    },
                    storeMapUrl: "/ms/de_CH/img/local_store_info/pratteln/1200x500_store_map_292.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                }, {
                    value: "275",
                    name: "IKEA Rothenburg LU",
                    storeUrl: "/ch/de/stores/275",
                    storeLocation: {
                        longitude: "8.245132",
                        latitude: "47.092945"
                    },
                    storeAddress: {
                        cityName: "ROTHENBURG",
                        address1: "Wahligenstrasse 6",
                        zipCode: "6023"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_rothenburg.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                }, {
                    value: "079",
                    name: "IKEA Spreitenbach AG",
                    storeUrl: "/ch/de/stores/079",
                    storeLocation: {
                        longitude: "8.375165",
                        latitude: "47.422106"
                    },
                    storeAddress: {
                        cityName: "SPREITENBACH",
                        address1: "Müslistrasse 16",
                        zipCode: "8957"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_079_spreitenbach_2018.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                }, {
                    value: "917",
                    name: "IKEA St. Gallen SG",
                    storeUrl: "/ch/de/stores/917",
                    storeLocation: {
                        longitude: "9.306986",
                        latitude: "47.408777"
                    },
                    storeAddress: {
                        cityName: "ST GALLEN",
                        address1: "Zürcherstrasse 460",
                        zipCode: "9015"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_stgallen.jpg",
                    timeZone: "Europe/Zurich"
                }, {
                    value: "918",
                    name: "IKEA Vernier GE",
                    storeUrl: "/ch/de/stores/918",
                    storeLocation: {
                        longitude: "6.092434",
                        latitude: "46.219693"
                    },
                    storeAddress: {
                        cityName: "VERNIER",
                        address1: "156, Route de Vernier",
                        zipCode: "1214"
                    },
                    storeMapUrl: "/ms/de_CH/img/store_images/store_maps/1200x900_vernier.jpg",
                    timeZone: "Europe/Zurich",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0 848 801 100",
                            storeContactMethodText: "Contact Center"
                        }]
                    }
                },

// FR

  {
                    value: "018",
                    name: "Avignon",
                    storeUrl: "/fr/fr/stores/018",
                    storeLocation: {
                        longitude: "4.890718",
                        latitude: "43.978379"
                    },
                    storeAddress: {
                        cityName: "Vedène",
                        address1: "100 chemin du Pont Blanc",
                        zipCode: "84270"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/FY20-Nouveau plan du magasin.pdf",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "{0} Une question ? Consultez nos questions réponses et les modes de contact à votre disposition."
                        }],
                        linkList: [{
                            linkName: "Beson d'aide ?",
                            linkUrl: "https://www.ikea.com/fr/fr/store/avignon/store_info"
                        }]
                    }
                }, {
                    value: "310",
                    name: "Bayonne Ametzondo",
                    storeUrl: "/fr/fr/stores/310",
                    storeLocation: {
                        longitude: "-1.442449",
                        latitude: "43.480218"
                    },
                    storeAddress: {
                        cityName: "Saint Pierre d’IRUBE",
                        address1: "2-4 avenue du Portou",
                        zipCode: "64990"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/bayonne_08_15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "EMAIL",
                            emailAddress: "serviceclientele.bayonne@ikea.com",
                            storeContactMethodText: "IKEA Business IKEA Bayonne"
                        }]
                    }
                }, {
                    value: "134",
                    name: "Bordeaux",
                    storeUrl: "/fr/fr/stores/134",
                    storeLocation: {
                        longitude: "-0.565732",
                        latitude: "44.884846"
                    },
                    storeAddress: {
                        cityName: "Bordeaux",
                        address1: "Centre commercial Bordeaux Lac",
                        address2: "Avenue des 40 Journaux",
                        zipCode: "33049"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Plan_Bordeaux_08_2018.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "EMAIL",
                            emailAddress: "ikea.business.bordeaux@ikea.com",
                            storeContactMethodText: "IKEA Business à IKEA Bordeaux"
                        }],
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Beson d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "060",
                    name: "Brest",
                    storeUrl: "/fr/fr/stores/060",
                    storeLocation: {
                        longitude: "-4.441609",
                        latitude: "48.417951"
                    },
                    storeAddress: {
                        cityName: "Guipavas",
                        address1: "Les champs de Coataudon",
                        address2: "Le Froutven",
                        zipCode: "29490"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/BR_Directory_board_Borne_Info_FY20_1890x850_72dpi.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "EMAIL",
                            emailAddress: "pro.brest@ikea.com",
                            storeContactMethodText: "IKEA Business à IKEA Brest"
                        }],
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Contactez-nous",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "199",
                    name: "Caen Fleury-sur-Orne",
                    storeUrl: "/fr/fr/stores/199",
                    storeLocation: {
                        longitude: "-0.367742",
                        latitude: "49.141797"
                    },
                    storeAddress: {
                        cityName: "Fleury-sur-Orne",
                        address1: "970 avenue de Suisse Normande",
                        zipCode: "14123"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/SE_Plans_magasin.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "345",
                    name: "Clermont-Ferrand",
                    storeUrl: "/fr/fr/stores/345",
                    storeLocation: {
                        longitude: "3.135072",
                        latitude: "45.803315"
                    },
                    storeAddress: {
                        cityName: "Clermont-Ferrand",
                        address1: "19 boulevard Louis Chartoire",
                        address2: "Centre commercial Les Gravanches",
                        zipCode: "63100"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Plan_magasin_Clermont-Fd_1890x850_FY20_V01_HD.JPG",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Beson d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "086",
                    name: "Dijon",
                    storeUrl: "/fr/fr/stores/086",
                    storeLocation: {
                        longitude: "5.064257",
                        latitude: "47.339154"
                    },
                    storeAddress: {
                        cityName: "Dijon",
                        address1: "1 rue de Cracovie",
                        zipCode: "21000"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Plan_magasin_FY20_metro_mobile.pdf",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Contactez-nous",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "562",
                    name: "Grand Parilly",
                    storeUrl: "/fr/fr/stores/562",
                    storeLocation: {
                        longitude: "4.882778",
                        latitude: "45.720556"
                    },
                    storeAddress: {
                        cityName: "VENISSIEUX",
                        address1: "9 rue Simone Veil",
                        zipCode: "69200"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Grand-Parilly- plan-3D.PDF",
                    timeZone: "Europe/Paris"
                }, {
                    value: "435",
                    name: "Grenoble",
                    storeUrl: "/fr/fr/stores/435",
                    storeLocation: {
                        longitude: "5.776631",
                        latitude: "45.181311"
                    },
                    storeAddress: {
                        cityName: "Saint Martin d'Hères",
                        address1: "150 rue Gabriel Péri",
                        zipCode: "38400"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/plan_grenoble_1890x850_042019.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Contactez-nous",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "051",
                    name: "Hénin-Beaumont",
                    storeUrl: "/fr/fr/stores/051",
                    storeLocation: {
                        longitude: "2.976474",
                        latitude: "50.393329"
                    },
                    storeAddress: {
                        cityName: "Hénin Beaumont",
                        address1: "275 boulevard Olof Palme",
                        address2: "Centre Commercial Maison Plus",
                        zipCode: "62110"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Plan_IME_T1_FY19-01.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "133",
                    name: "Lille",
                    storeUrl: "/fr/fr/stores/133",
                    storeLocation: {
                        longitude: "2.97811",
                        latitude: "50.650039"
                    },
                    storeAddress: {
                        cityName: "Lomme",
                        address1: "Centre commercial près de Kinepolis",
                        address2: "rue du Grand But",
                        zipCode: "59160"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/lille_fev_15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "433",
                    name: "Marseille - La Valentine",
                    storeUrl: "/fr/fr/stores/433",
                    storeLocation: {
                        longitude: "5.481167",
                        latitude: "43.293862"
                    },
                    storeAddress: {
                        cityName: "Marseille",
                        address1: "ZAC La Ravelle",
                        address2: "La Valentine",
                        zipCode: "13011"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/la_valentine_02_15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "130",
                    name: "Marseille - Vitrolles",
                    storeUrl: "/fr/fr/stores/130",
                    storeLocation: {
                        longitude: "5.267553",
                        latitude: "43.429892"
                    },
                    storeAddress: {
                        cityName: "Vitrolles Cedex",
                        address1: "Zi La Bastide Blanche",
                        address2: "Bp 30207",
                        zipCode: "13746"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Plan-magasin_vitrolles_2018.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "260",
                    name: "Metz",
                    storeUrl: "/fr/fr/stores/260",
                    storeLocation: {
                        longitude: "6.188253",
                        latitude: "49.150394"
                    },
                    storeAddress: {
                        cityName: "La Maxe",
                        address1: "rue du Trou aux serpents",
                        zipCode: "57140"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/plan_metz_FY19.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Beson d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "402",
                    name: "Montpellier",
                    storeUrl: "/fr/fr/stores/402",
                    storeLocation: {
                        longitude: "3.92599",
                        latitude: "43.604101"
                    },
                    storeAddress: {
                        cityName: "Montpellier cedex 2",
                        address1: "Zone Odysséum",
                        address2: "1 place de Troie",
                        address3: "CS99007",
                        zipCode: "34967"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/montpellier_02_15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "444",
                    name: "Mulhouse",
                    storeUrl: "/fr/fr/stores/444",
                    storeLocation: {
                        longitude: "7.283263",
                        latitude: "47.729283"
                    },
                    storeAddress: {
                        cityName: "Morschwiller-le-bas",
                        address1: "Parc des Collines",
                        address2: "Place du renne",
                        zipCode: "68790"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/mulhouse_05_07_15_1200x747.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "316",
                    name: "Nantes",
                    storeUrl: "/fr/fr/stores/316",
                    storeLocation: {
                        longitude: "-1.632038",
                        latitude: "47.222465"
                    },
                    storeAddress: {
                        cityName: "SAINT HERBLAIN",
                        address1: "Pôle Atlantis",
                        address2: "Boulevard S. ALLENDE BP 80137",
                        zipCode: "44817"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/nantes_02_15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "487",
                    name: "Orléans Ardon",
                    storeUrl: "/fr/fr/stores/487",
                    storeLocation: {
                        longitude: "1.9151",
                        latitude: "47.8274"
                    },
                    storeAddress: {
                        cityName: "Ardon",
                        address1: "ZAC du Parc de Limère",
                        address2: "Rond point de Sologne",
                        zipCode: "45160"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/PLAN_1890x950pxl_orleans_012020.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions réponses et les modes de contact à votre disposition."
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "240",
                    name: "Paris Est, Villiers sur Marne",
                    storeUrl: "/fr/fr/stores/240",
                    storeLocation: {
                        longitude: "2.529715",
                        latitude: "48.828908"
                    },
                    storeAddress: {
                        cityName: "Villiers-sur-Marne",
                        address1: "Centre Commercial les Armoiries",
                        zipCode: "94350"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Villiers_02-15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "580",
                    name: "Paris La Madeleine",
                    storeUrl: "/fr/fr/stores/580",
                    storeLocation: {
                        longitude: "2.325483",
                        latitude: "48.869177"
                    },
                    storeAddress: {
                        cityName: "Paris",
                        address1: "23 boulevard de la Madeleine",
                        zipCode: "75001"
                    },
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "IKEA Paris La Madeleine vous souhaite la bienvenue !"
                        }]
                    }
                }, {
                    value: "389",
                    name: "Paris N-O, Franconville",
                    storeUrl: "/fr/fr/stores/389",
                    storeLocation: {
                        longitude: "2.214282",
                        latitude: "48.986667"
                    },
                    storeAddress: {
                        cityName: "Franconville",
                        address1: "337 rue du général Leclerc",
                        zipCode: "95130"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/DIRECTORY-BOARD-MARKETHALL-NEW-0120.png",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "131",
                    name: "Paris Nord, Roissy",
                    storeUrl: "/fr/fr/stores/131",
                    storeLocation: {
                        longitude: "2.49549",
                        latitude: "48.975351"
                    },
                    storeAddress: {
                        cityName: "GONESSE",
                        address1: "164 avenue de la plaine de France",
                        zipCode: "95950"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/roissy_27_10_15_1200x900.png",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "083",
                    name: "Paris Ouest, Plaisir",
                    storeUrl: "/fr/fr/stores/083",
                    storeLocation: {
                        longitude: "1.96769",
                        latitude: "48.829063"
                    },
                    storeAddress: {
                        cityName: "Plaisir",
                        address1: "Centre commercial Grand Plaisir",
                        address2: "202 rue Henri Barbusse",
                        zipCode: "78370"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/PL_PLAN_PAGEWEB.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "285",
                    name: "Paris Ouest, Vélizy",
                    storeUrl: "/fr/fr/stores/285",
                    storeLocation: {
                        longitude: "2.2239",
                        latitude: "48.783075"
                    },
                    storeAddress: {
                        cityName: "Vélizy-Villacoublay",
                        address1: "Expert cuisine et salle de bain",
                        address2: "3 rue du Petit Clamart",
                        zipCode: "78140"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/velizy_juillet_2014_1200x626.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Contactez-nous",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "082",
                    name: "Paris Sud, Evry",
                    storeUrl: "/fr/fr/stores/082",
                    storeLocation: {
                        longitude: "2.439544",
                        latitude: "48.596124"
                    },
                    storeAddress: {
                        cityName: "Lisses",
                        address1: "Z. I. Le Clos aux Pois",
                        zipCode: "91090"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Maps_Evry_082018.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "432",
                    name: "Paris Sud, Thiais",
                    storeUrl: "/fr/fr/stores/432",
                    storeLocation: {
                        longitude: "2.387858",
                        latitude: "48.757041"
                    },
                    storeAddress: {
                        cityName: "Thiais",
                        address1: "Angle av. de la Résistance et av. de Versailles",
                        zipCode: "94320"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/plan_thiais.png",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "198",
                    name: "Reims",
                    storeUrl: "/fr/fr/stores/198",
                    storeLocation: {
                        longitude: "3.963865",
                        latitude: "49.258072"
                    },
                    storeAddress: {
                        cityName: "THILLOIS",
                        address1: "ZAC Nord Thillois",
                        zipCode: "51370"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/PLAN_MAGASIN_REIMS_PXL.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Contactez-nous",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "177",
                    name: "Rennes",
                    storeUrl: "/fr/fr/stores/177",
                    storeLocation: {
                        longitude: "-1.762984",
                        latitude: "48.138084"
                    },
                    storeAddress: {
                        cityName: "Pacé",
                        address1: "Zac Rive ouest",
                        address2: "14 avenue des Touches",
                        zipCode: "35740"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Plan_rennes_07_2018.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "163",
                    name: "Rouen",
                    storeUrl: "/fr/fr/stores/163",
                    storeLocation: {
                        longitude: "1.095639",
                        latitude: "49.331862"
                    },
                    storeAddress: {
                        cityName: "Tourville-la-Rivière",
                        address1: "Avenue Gustave Picard",
                        address2: "ZAC du Clos aux Antes",
                        zipCode: "76410"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Rouen_02_15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "431",
                    name: "St Etienne",
                    storeUrl: "/fr/fr/stores/431",
                    storeLocation: {
                        longitude: "4.41792",
                        latitude: "45.449406"
                    },
                    storeAddress: {
                        cityName: "St Etienne",
                        address1: "rue Jean Huss",
                        zipCode: "42043"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/plan_saint_etienne_2018.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "239",
                    name: "Strasbourg",
                    storeUrl: "/fr/fr/stores/239",
                    storeLocation: {
                        longitude: "7.730818",
                        latitude: "48.600569"
                    },
                    storeAddress: {
                        cityName: "Strasbourg",
                        address1: "26 place de l'Abattoir",
                        address2: "Cronenbourg BP 9",
                        zipCode: "67037"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Strasbourg_02_15.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "315",
                    name: "Toulon",
                    storeUrl: "/fr/fr/stores/315",
                    storeLocation: {
                        longitude: "6.01083",
                        latitude: "43.14194"
                    },
                    storeAddress: {
                        cityName: "La Valette du Var",
                        address1: "Zac Valgora",
                        address2: "Château Redon",
                        zipCode: "83160"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/Plan_magasin_Toulon_19_07.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "242",
                    name: "Toulouse",
                    storeUrl: "/fr/fr/stores/242",
                    storeLocation: {
                        longitude: "1.376848",
                        latitude: "43.51656"
                    },
                    storeAddress: {
                        cityName: "Roques-sur-Garonne",
                        address1: "Centre Commercial Roques-sur-Garonne",
                        address2: "Allée de Fraixinet",
                        zipCode: "31120"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/plan_toulouse_fy19.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                }, {
                    value: "434",
                    name: "Tours",
                    storeUrl: "/fr/fr/stores/434",
                    storeLocation: {
                        longitude: "0.717126",
                        latitude: "47.375472"
                    },
                    storeAddress: {
                        cityName: "Tours",
                        address1: "Quartier Rochepinard",
                        address2: "Rue Desire lecomte",
                        zipCode: "37000"
                    },
                    storeMapUrl: "/ms/fr_FR/img/store_images/store_maps/plan_tours_042019.jpg",
                    timeZone: "Europe/Paris",
                    storeContactInfo: {
                        paragraphList: [{
                            paragraphText: "Besoin d'aide ? Une question ? Consultez nos questions-réponses et les modes de contact à votre disposition. {1}"
                        }],
                        linkList: [{
                            linkName: "Besoin d'aide ?",
                            linkUrl: "https://www.ikea.com/ms/fr_FR/customer_service/contactez_nous.html"
                        }]
                    }
                },

  // BE

  {
                    value: "482",
                    name: "IKEA Anderlecht",
                    storeUrl: "/be/nl/stores/482",
                    storeLocation: {
                        longitude: "4.289643",
                        latitude: "50.810943"
                    },
                    storeAddress: {
                        cityName: "Anderlecht",
                        address1: "Bergensesteenweg 1432",
                        zipCode: "1070"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/anderlecht_storemap_1200x840.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                }, {
                    value: "483",
                    name: "IKEA Arlon",
                    storeUrl: "/be/nl/stores/483",
                    storeLocation: {
                        longitude: "5.890496",
                        latitude: "49.637537"
                    },
                    storeAddress: {
                        cityName: "Arlon-Sterpenich",
                        address1: "Rue de Grass 100",
                        zipCode: "6700"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/arlon_storemap_1200x840.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                }, {
                    value: "169",
                    name: "IKEA Gent",
                    storeUrl: "/be/nl/stores/169",
                    storeLocation: {
                        longitude: "3.687866",
                        latitude: "51.022772"
                    },
                    storeAddress: {
                        cityName: "Sint-Denijs-Westrem",
                        address1: "Maaltekouter 2",
                        zipCode: "9051"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/gent_storemap_1200x840.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                }, {
                    value: "452",
                    name: "IKEA Hasselt",
                    storeUrl: "/be/nl/stores/452",
                    storeLocation: {
                        longitude: "5.320069",
                        latitude: "50.918641"
                    },
                    storeAddress: {
                        cityName: "Hasselt",
                        address1: "Biezenstraat 45",
                        zipCode: "3500"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/hasselt_storemap_1200x840.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                }, {
                    value: "375",
                    name: "IKEA Liège",
                    storeUrl: "/be/nl/stores/375",
                    storeLocation: {
                        longitude: "5.461943",
                        latitude: "50.681191"
                    },
                    storeAddress: {
                        cityName: "Hognoul",
                        address1: "Porte de Liège 7",
                        zipCode: "4342"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/hognoul_storemap_1200x840.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                }, {
                    value: "423",
                    name: "IKEA Mons",
                    storeUrl: "/be/nl/stores/423",
                    storeLocation: {
                        longitude: "3.930841",
                        latitude: "50.456170"
                    },
                    storeAddress: {
                        cityName: "Mons",
                        address1: "Place des Grands Prés 1a",
                        zipCode: "7000"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/mons_storemap_1200x840.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                }, {
                    value: "179",
                    name: "IKEA Wilrijk",
                    storeUrl: "/be/nl/stores/179",
                    storeLocation: {
                        longitude: "4.382923",
                        latitude: "51.156268"
                    },
                    storeAddress: {
                        cityName: "Wilrijk",
                        address1: "Boomsesteenweg 755",
                        zipCode: "2610"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/wilrijk_storemap_1200x490.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                }, {
                    value: "376",
                    name: "IKEA Zaventem",
                    storeUrl: "/be/nl/stores/376",
                    storeLocation: {
                        longitude: "4.494374",
                        latitude: "50.871073"
                    },
                    storeAddress: {
                        cityName: "Zaventem",
                        address1: "Weiveldlaan 19",
                        zipCode: "1930"
                    },
                    storeMapUrl: "/ms/nl_BE/img/store_images/store_maps_mobile/layout-ikea-zaventem-nl-1726x1233.jpg",
                    timeZone: "Europe/Brussels",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "02 719 19 22",
                            storeContactMethodText: "Contacteer ons"
                        }]
                    }
                },

  // CZ

  {
                    value: "278",
                    name: "Brno",
                    storeUrl: "/cz/cs/stores/278",
                    storeLocation: {
                        longitude: "16.627607",
                        latitude: "49.158359"
                    },
                    storeAddress: {
                        cityName: "Brno-Dolní Heršpice",
                        address1: "Skandinávská 4",
                        zipCode: "619 00"
                    },
                    timeZone: "Europe/Prague",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "234-567-890",
                            storeContactMethodText: "Zavolejte nám každý den od 9:00–21:00"
                        }]
                    }
                }, {
                    value: "309",
                    name: "Ostrava",
                    storeUrl: "/cz/cs/stores/309",
                    storeLocation: {
                        longitude: "18.227727",
                        latitude: "49.80027"
                    },
                    storeAddress: {
                        cityName: "Ostrava-Zábřeh",
                        address1: "Rudná 110",
                        zipCode: "700 30"
                    },
                    timeZone: "Europe/Prague",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "234-567-890",
                            storeContactMethodText: "Zavolejte nám každý den od 9:00–21:00"
                        }]
                    }
                }, {
                    value: "408",
                    name: "Praha Černý Most",
                    storeUrl: "/cz/cs/stores/408",
                    storeLocation: {
                        longitude: "14.587927",
                        latitude: "50.106488"
                    },
                    storeAddress: {
                        cityName: "Praha 9-Černý Most",
                        address1: "Chlumecká 10/664",
                        zipCode: "198 00"
                    },
                    timeZone: "Europe/Prague",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "234-567-890",
                            storeContactMethodText: "Zavolejte nám každý den od 9:00–21:00"
                        }]
                    }
                }, {
                    value: "178",
                    name: "Praha-Zličín",
                    storeUrl: "/cz/cs/stores/178",
                    storeLocation: {
                        longitude: "14.299679",
                        latitude: "50.057359"
                    },
                    storeAddress: {
                        cityName: "Praha 5-Zličín",
                        address1: "Skandinávská 1",
                        zipCode: "15500"
                    },
                    timeZone: "Europe/Prague",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "234-567-890",
                            storeContactMethodText: "Zavolejte nám každý den od 9:00–21:00"
                        }]
                    }
                },

  // IT

  {
                    value: "457",
                    name: "Ancona",
                    storeUrl: "/it/it/stores/457",
                    storeLocation: {
                        longitude: "13.518961",
                        latitude: "43.530159"
                    },
                    storeAddress: {
                        cityName: "Camerano (AN)",
                        address1: "Via Aspio Terme",
                        zipCode: "60021"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/ancona/pdf/040418_app_guide_ancona.pdf",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "356",
                    name: "Bari",
                    storeUrl: "/it/it/stores/356",
                    storeLocation: {
                        longitude: "16.897037",
                        latitude: "41.089177"
                    },
                    storeAddress: {
                        cityName: "Bari (BA)",
                        address1: "Via Caduti del lavoro 3/5",
                        zipCode: "70126"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/bari.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "231",
                    name: "Bologna Casalecchio",
                    storeUrl: "/it/it/stores/231",
                    storeLocation: {
                        longitude: "11.249866",
                        latitude: "44.488703"
                    },
                    storeAddress: {
                        cityName: "Casalecchio di Reno (BO)",
                        address1: "Via John Lennon 6",
                        zipCode: "40033"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/bologna_casalecchio/servizi/store-guide-bologna.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "IKEA Customer service center"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 20<br>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br>{2}"
                        }],
                        linkList: [{
                            linkName: "Chat IKEA",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Domande frequenti",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "354",
                    name: "Brescia Roncadelle",
                    storeUrl: "/it/it/stores/354",
                    storeLocation: {
                        longitude: "10.165572",
                        latitude: "45.534127"
                    },
                    storeAddress: {
                        cityName: "Roncadelle (BS)",
                        address1: "Via Massimo D'Antona e Marco Biagi 9",
                        zipCode: "25030"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/brescia_roncadelle/immagini/novembre_16/IKEA-brescia-customer-guidance_16.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "098",
                    name: "Catania",
                    storeUrl: "/it/it/stores/098",
                    storeLocation: {
                        longitude: "15.036871",
                        latitude: "37.447334"
                    },
                    storeAddress: {
                        cityName: "Catania (CT)",
                        address1: "Tangenziale Catania Uscita Zona Industriale Nord",
                        address2: "su A18 dir. Messina, uscita zona Industriale Nord",
                        zipCode: "95121"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/catania.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "029",
                    name: "Chieti S.G. Teatino",
                    storeUrl: "/it/it/stores/029",
                    storeLocation: {
                        longitude: "14.167621",
                        latitude: "42.396587"
                    },
                    storeAddress: {
                        cityName: "Chieti (CH)",
                        address1: "Via Regolizie 22",
                        address2: "Uscita A14 Pescara Ovest",
                        zipCode: "66020"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/chieti_s_g_teatino/FY18/pdf/029_metropolitana_180305.pdf",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/> {1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "352",
                    name: "Firenze Sesto F.no",
                    storeUrl: "/it/it/stores/352",
                    storeLocation: {
                        longitude: "11.187258",
                        latitude: "43.807333"
                    },
                    storeAddress: {
                        cityName: "Sesto Fiorentino (FI)",
                        address1: "Via Francesco Redi 1",
                        zipCode: "50019"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/firenze_sestofiorentino/Servizi/Store_Guide_Firenze-2020.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 20<br>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br>{2}"
                        }],
                        linkList: [{
                            linkName: "Chat IKEA",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Domande frequenti",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "232",
                    name: "Genova",
                    storeUrl: "/it/it/stores/232",
                    storeLocation: {
                        longitude: "8.884643",
                        latitude: "44.423465"
                    },
                    storeAddress: {
                        cityName: "Genova (GE)",
                        address1: "Via Luigi Perini 5",
                        zipCode: "16152"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/genova-20170524.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "https://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/servizio-clienti/faq-contatti/index.html"
                        }]
                    }
                }, {
                    value: "116",
                    name: "Gorizia_Villesse",
                    storeUrl: "/it/it/stores/116",
                    storeLocation: {
                        longitude: "13.444476",
                        latitude: "45.87144"
                    },
                    storeAddress: {
                        cityName: "Villesse (GO)",
                        address1: "Località Maranuz, 1",
                        zipCode: "34070"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/Villesse-2019-2.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat ›",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ ›",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "233",
                    name: "Milano Carugate",
                    storeUrl: "/it/it/stores/233",
                    storeLocation: {
                        longitude: "9.330008",
                        latitude: "45.549614"
                    },
                    storeAddress: {
                        cityName: "Carugate (MI)",
                        address1: "Via dell'Artigianato 7",
                        zipCode: "20061"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/milano_carugate/mobile_campaigns/settembre17/233-map-metropolitana-fy18.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "455",
                    name: "Milano Corsico",
                    storeUrl: "/it/it/stores/455",
                    storeLocation: {
                        longitude: "9.079696",
                        latitude: "45.426769"
                    },
                    storeAddress: {
                        cityName: "Corsico (MI)",
                        address1: "Via nuova Marchesi 4",
                        zipCode: "20094"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/milano_corsico/mobile/febbraio18/455_mappa_negozio_25012018_def.pdf",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "295",
                    name: "Milano San Giuliano",
                    storeUrl: "/it/it/stores/295",
                    storeLocation: {
                        longitude: "9.259392",
                        latitude: "45.388370"
                    },
                    storeAddress: {
                        cityName: "San Giuliano Milanese (MI)",
                        address1: "Via Po 3",
                        address2: "Frazione Sesto Ulteriano",
                        zipCode: "20098"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/sangiuliano.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "353",
                    name: "Napoli Afragola",
                    storeUrl: "/it/it/stores/353",
                    storeLocation: {
                        longitude: "14.316489",
                        latitude: "40.907502"
                    },
                    storeAddress: {
                        cityName: "Afragola (NA)",
                        address1: "Via Enrico Berlinguer 2",
                        zipCode: "80021"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/napoli.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "355",
                    name: "Padova",
                    storeUrl: "/it/it/stores/355",
                    storeLocation: {
                        longitude: "11.933877",
                        latitude: "45.418203"
                    },
                    storeAddress: {
                        cityName: "Padova",
                        address1: "Via Fraccalanza 1",
                        address2: "A4 Uscita Padova est",
                        zipCode: "35100"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/padova/immagini/IKEA-padova-mappa-negozio-17.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat ›",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ ›",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "303",
                    name: "Parma",
                    storeUrl: "/it/it/stores/303",
                    storeLocation: {
                        longitude: "10.364442",
                        latitude: "44.83075"
                    },
                    storeAddress: {
                        cityName: "Parma (PR)",
                        address1: "Largo Benito Jacovitti 11/a",
                        address2: "Località Ugozzolo",
                        zipCode: "43122"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/mobile/030918-metropolitana-parma.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199 114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "314",
                    name: "Pisa",
                    storeUrl: "/it/it/stores/314",
                    storeLocation: {
                        longitude: "10.383517",
                        latitude: "43.692471"
                    },
                    storeAddress: {
                        cityName: "Pisa (PI)",
                        address1: "Via Rino Ricci 8",
                        zipCode: "56121"
                    },
                    storeMapUrl: "/ms/it_IT/img/local_store_info/pisa/Servizi_new/190525_MAPPA_PISA_314_APP.png",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 20<br>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br>{2}"
                        }],
                        linkList: [{
                            linkName: "Chat IKEA",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Domande frequenti",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "111",
                    name: "Rimini",
                    storeUrl: "/it/it/stores/111",
                    storeLocation: {
                        longitude: "12.477143",
                        latitude: "44.078055"
                    },
                    storeAddress: {
                        cityName: "Rimini (RN)",
                        address1: "Via Tolemaide, 140",
                        zipCode: "47922"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/rimini-mappa.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "234",
                    name: "Roma Anagnina",
                    storeUrl: "/it/it/stores/234",
                    storeLocation: {
                        longitude: "12.592499",
                        latitude: "41.836496"
                    },
                    storeAddress: {
                        cityName: "Roma (RM)",
                        address1: "Via Fattoria Rampa 35",
                        address2: "Uscita 21-21 del GRA Anagnina-Tuscolana",
                        zipCode: "00173"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/20171004-anagnina.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "427",
                    name: "Roma Porta di Roma",
                    storeUrl: "/it/it/stores/427",
                    storeLocation: {
                        longitude: "12.542599",
                        latitude: "41.971783"
                    },
                    storeAddress: {
                        cityName: "Roma (RM)",
                        address1: "Via Casale Redicicoli 501",
                        address2: "Località Bufalotta",
                        zipCode: "00139"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/portadiroma.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "458",
                    name: "Salerno Baronissi",
                    storeUrl: "/it/it/stores/458",
                    storeLocation: {
                        longitude: "14.789674",
                        latitude: "40.755234"
                    },
                    storeAddress: {
                        cityName: "Baronissi (SA)",
                        address1: "Via Salvatore Allende",
                        address2: "Località Orignano",
                        zipCode: "84081"
                    },
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                }, {
                    value: "456",
                    name: "Torino Collegno",
                    storeUrl: "/it/it/stores/456",
                    storeLocation: {
                        longitude: "7.583474",
                        latitude: "45.097935"
                    },
                    storeAddress: {
                        cityName: "Collegno (TO)",
                        address1: "Viale Svezia 1",
                        zipCode: "10093"
                    },
                    storeMapUrl: "/ms/it_IT/img/mls/maps/torino-20170524.jpg",
                    timeZone: "Europe/Rome",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "199114646",
                            storeContactMethodText: "Servizio Clienti IKEA"
                        }],
                        paragraphList: [{
                            paragraphText: "IKEA CHAT: in linea con un operatore, tutti i giorni dalle 9 alle 22<br/>{1}"
                        }, {
                            paragraphText: "IKEA FAQ: Domande e risposte<br/>{2}"
                        }],
                        linkList: [{
                            linkName: "Entra in IKEA Chat",
                            linkUrl: "http://it.chat.ikea.com/i3root/"
                        }, {
                            linkName: "Leggi le FAQ",
                            linkUrl: "https://www.ikea.com/ms/it_IT/customer-service/faq.html"
                        }]
                    }
                },

  // PT

  {
                    value: "367",
                    name: "Alfragide",
                    storeUrl: "/pt/pt/stores/367",
                    storeLocation: {
                        longitude: "-9.21560",
                        latitude: "38.72875"
                    },
                    storeAddress: {
                        cityName: "Alfragide",
                        address1: "Zona Industrial de Alfragide",
                        address2: "Estrada Nacional 117",
                        zipCode: "2614-520 Amadora"
                    },
                    storeMapUrl: "/ms/pt_PT/img/store_images/store_maps/16-mapa-loja-Alfragide.jpg",
                    timeZone: "Europe/Lisbon"
                }, {
                    value: "499",
                    name: "Braga",
                    storeUrl: "/pt/pt/stores/499",
                    storeLocation: {
                        longitude: "-8.431013",
                        latitude: "+41.577704"
                    },
                    storeAddress: {
                        cityName: "Braga",
                        address1: "CC Nova Arcada",
                        address2: "Avenida de Lamas, nº 100",
                        address3: "União de Freguesias de Real, Dume e Semelhe",
                        zipCode: "4700-068 Braga"
                    },
                    storeMapUrl: "/ms/pt_PT/img/local_store_info/braga/maps/mapa-braga-795x795.jpg",
                    timeZone: "Europe/Lisbon"
                }, {
                    value: "453",
                    name: "Loulé",
                    storeUrl: "/pt/pt/stores/453",
                    storeLocation: {
                        longitude: "-7.995564",
                        latitude: "37.096452"
                    },
                    storeAddress: {
                        cityName: "Loulé",
                        address1: "Avenida Algarve nº5",
                        zipCode: "8135-182 Almancil"
                    },
                    timeZone: "Europe/Lisbon"
                }, {
                    value: "001",
                    name: "Loures",
                    storeUrl: "/pt/pt/stores/001",
                    storeLocation: {
                        longitude: "-9.148468",
                        latitude: "38.815185"
                    },
                    storeAddress: {
                        cityName: "Frielas",
                        address1: "EN 250 Rua 28 de Setembro",
                        zipCode: "2660-001 Loures"
                    },
                    storeMapUrl: "/ms/pt_PT/img/local_store_info/loures/maps/Shopping_guide_2016_A4.jpg",
                    timeZone: "Europe/Lisbon"
                }, {
                    value: "009",
                    name: "Matosinhos",
                    storeUrl: "/pt/pt/stores/009",
                    storeLocation: {
                        longitude: "-8.689111",
                        latitude: "41.210348"
                    },
                    storeAddress: {
                        cityName: "Matosinhos",
                        address1: "Av. Óscar Lopes",
                        zipCode: "4450-745 Matosinhos"
                    },
                    storeMapUrl: "/ms/pt_PT/img/local_store_info/matosinhos/mobile/009storeguide.jpg",
                    timeZone: "Europe/Lisbon"
                },

 // DK

  {
                    value: "121",
                    name: "Gentofte",
                    storeUrl: "/dk/da/stores/121",
                    storeLocation: {
                        longitude: "12.519644",
                        latitude: "55.753781"
                    },
                    storeAddress: {
                        cityName: "Gentofte",
                        address1: "Nybrovej 2",
                        zipCode: "2820"
                    },
                    storeMapUrl: "/ms/da_DK/img/store_images/store_maps/store_guide_gentofte.jpg",
                    timeZone: "Europe/Copenhagen",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "70 15 09 09",
                            storeContactMethodText: "IKEA Kundesupport"
                        }],
                        paragraphList: [{
                            paragraphText: "<b>Åbningstider </b><br>Lukket til og med 3. januar 2021 <br>For mere information om specielle lukkedage<br>{1}"
                        }],
                        linkList: [{
                            linkName: "Læs mere på IKEA.dk",
                            linkUrl: "https://www.ikea.com/dk/da/stores/gentofte/"
                        }]
                    }
                }, {
                    value: "172",
                    name: "Odense",
                    storeUrl: "/dk/da/stores/172",
                    storeLocation: {
                        longitude: "10.429582",
                        latitude: "55.380576"
                    },
                    storeAddress: {
                        cityName: "Odense SØ",
                        address1: "Ørbækvej 91",
                        zipCode: "5220"
                    },
                    storeMapUrl: "/ms/da_DK/img/store_images/store_maps/Store-guide-Odense-01042015_web.png",
                    timeZone: "Europe/Copenhagen",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "70 15 09 09",
                            storeContactMethodText: "IKEA Kundesupport"
                        }],
                        paragraphList: [{
                            paragraphText: "<b>Åbningstider </b><br>Lukket til og med 3. januar 2021 <br>For mere information om specielle lukkedage<br>{1}"
                        }],
                        linkList: [{
                            linkName: "Læs mere på IKEA.dk",
                            linkUrl: "https://www.ikea.com/dk/da/stores/odense/"
                        }]
                    }
                }, {
                    value: "094",
                    name: "Taastrup",
                    storeUrl: "/dk/da/stores/094",
                    storeLocation: {
                        longitude: "12.288411",
                        latitude: "55.659747"
                    },
                    storeAddress: {
                        cityName: "Taastrup",
                        address1: "Mårkærvej 15",
                        zipCode: "2630"
                    },
                    storeMapUrl: "/ms/da_DK/img/local_store_info/taastrup/Store_guide_Taastrup.jpg",
                    timeZone: "Europe/Copenhagen",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "70 15 09 09",
                            storeContactMethodText: "IKEA Kundesupport"
                        }],
                        paragraphList: [{
                            paragraphText: "<b>Åbningstider </b><br>Lukket til og med 3. januar 2021 <br>For info om specielle lukkedage<br>{1}"
                        }],
                        linkList: [{
                            linkName: "Læs mere på IKEA.dk",
                            linkUrl: "https://www.ikea.com/dk/da/stores/taastrup/"
                        }]
                    }
                }, {
                    value: "005",
                    name: "Aalborg",
                    storeUrl: "/dk/da/stores/005",
                    storeLocation: {
                        longitude: "9.866555",
                        latitude: "56.998867"
                    },
                    storeAddress: {
                        cityName: "Aalborg",
                        address1: "Krebsen 40",
                        zipCode: "9200"
                    },
                    storeMapUrl: "/ms/da_DK/img/store_images/store_maps/store_guide_aalborg.jpg",
                    timeZone: "Europe/Copenhagen",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "70 15 09 09",
                            storeContactMethodText: "IKEA Kundesupport"
                        }],
                        paragraphList: [{
                            paragraphText: "<b>Åbningstider </b><br>Lukket til og med 3. januar 2021<br><br>For mere information om specielle lukkedage<br>{1}"
                        }],
                        linkList: [{
                            linkName: "Læs mere på IKEA.dk",
                            linkUrl: "https://www.ikea.com/dk/da/stores/aalborg/"
                        }]
                    }
                }, {
                    value: "298",
                    name: "Aarhus",
                    storeUrl: "/dk/da/stores/298",
                    storeLocation: {
                        longitude: "10.181558",
                        latitude: "56.203697"
                    },
                    storeAddress: {
                        cityName: "Aarhus N",
                        address1: "Graham Bells Vej 7-11",
                        address2: "Skejby",
                        zipCode: "8200"
                    },
                    storeMapUrl: "/ms/da_DK/img/store_images/store_maps/aarhus-varehus-find-vej.png",
                    timeZone: "Europe/Copenhagen",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "70 15 09 09",
                            storeContactMethodText: "IKEA Kundesupport"
                        }],
                        paragraphList: [{
                            paragraphText: "<b>Åbningstider </b><br>Lukket til og med 3. januar 2021 <br>For mere information om specielle lukkedage<br>{1}"
                        }],
                        linkList: [{
                            linkName: "Læs mere på IKEA.dk",
                            linkUrl: "https://www.ikea.com/dk/da/stores/aarhus/"
                        }]
                    }
                },

  // NO

  {
                    value: "126",
                    name: "Forus",
                    storeUrl: "/no/no/stores/126",
                    storeLocation: {
                        longitude: "5.720873",
                        latitude: "58.88691"
                    },
                    storeAddress: {
                        cityName: "Sandnes",
                        address1: "Grenseveien 2",
                        zipCode: "4313"
                    },
                    storeMapUrl: "/ms/no_NO/img/storemaps/forus.jpg",
                    timeZone: "Europe/Oslo",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Kundeservice"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Bedriftskunder"
                        }]
                    }
                }, {
                    value: "095",
                    name: "Furuset",
                    storeUrl: "/no/no/stores/095",
                    storeLocation: {
                        longitude: "10.872602",
                        latitude: "59.933731"
                    },
                    storeAddress: {
                        cityName: "Oslo",
                        address1: "IKEA Furuset og Oslo planleggingsstudio er stengt",
                        address2: "Strømsveien 303",
                        zipCode: "1081"
                    },
                    storeMapUrl: "/ms/no_NO/img/storemaps/furuset1.jpg",
                    timeZone: "Europe/Oslo",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Kundeservice"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Bedriftskunder"
                        }]
                    }
                }, {
                    value: "371",
                    name: "Leangen",
                    storeUrl: "/no/no/stores/371",
                    storeLocation: {
                        longitude: "10.474348",
                        latitude: "63.428595"
                    },
                    storeAddress: {
                        cityName: "Trondheim",
                        address1: "Landbruksvegen 2",
                        zipCode: "7048"
                    },
                    storeMapUrl: "/ms/no_NO/img/storemaps/leangen.jpg",
                    timeZone: "Europe/Oslo",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Kundeservice"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Bedriftskunder"
                        }]
                    }
                }, {
                    value: "390",
                    name: "Ringsaker",
                    storeUrl: "/no/no/stores/390",
                    storeLocation: {
                        longitude: "11.055361",
                        latitude: "60.840801"
                    },
                    storeAddress: {
                        cityName: "Furnes",
                        address1: "Krokstadvegen 4",
                        zipCode: "2320"
                    },
                    timeZone: "Europe/Oslo",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Kundeservice"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Bedriftskunder"
                        }]
                    }
                }, {
                    value: "091",
                    name: "Slependen",
                    storeUrl: "/no/no/stores/091",
                    storeLocation: {
                        longitude: "10.497866",
                        latitude: "59.874035"
                    },
                    storeAddress: {
                        cityName: "Billingstad",
                        address1: "Nesbruveien 40",
                        zipCode: "1396"
                    },
                    storeMapUrl: "/ms/no_NO/img/storemaps/slependen.jpg",
                    timeZone: "Europe/Oslo",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Kundeservice"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Bedriftskunder"
                        }]
                    }
                }, {
                    value: "007",
                    name: "Sørlandet",
                    storeUrl: "/no/no/stores/007",
                    storeLocation: {
                        longitude: "8.158035",
                        latitude: "58.189641"
                    },
                    storeAddress: {
                        cityName: "Høvåg",
                        address1: "Sydinga 20",
                        zipCode: "4770"
                    },
                    storeMapUrl: "/ms/no_NO/img/storemaps/sorlandet_1.jpg",
                    timeZone: "Europe/Oslo",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Kundeservice"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Bedriftskunder"
                        }]
                    }
                }, {
                    value: "441",
                    name: "Åsane",
                    storeUrl: "/no/no/stores/441",
                    storeLocation: {
                        longitude: "5.331609",
                        latitude: "60.474025"
                    },
                    storeAddress: {
                        cityName: "Nyborg",
                        address1: "Åsamyrane 250",
                        zipCode: "5131"
                    },
                    storeMapUrl: "/ms/no_NO/img/storemaps/aasane.jpg",
                    timeZone: "Europe/Oslo",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02340",
                            storeContactMethodText: "Kundeservice"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "915 02 340",
                            storeContactMethodText: "Bedriftskunder"
                        }]
                    }
                },

  // SE

  {
                    value: "248",
                    name: "Borlänge",
                    storeUrl: "/se/sv/stores/248",
                    storeLocation: {
                        longitude: "15.421457",
                        latitude: "60.482664"
                    },
                    storeAddress: {
                        cityName: "Borlänge",
                        address1: "Norra Backagatan 1",
                        zipCode: "781 70"
                    },
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "122",
                    name: "Gävle",
                    storeUrl: "/se/sv/stores/122",
                    storeLocation: {
                        longitude: "16.989895",
                        latitude: "60.633906"
                    },
                    storeAddress: {
                        cityName: "Valbo",
                        address1: "Valbovägen 307",
                        zipCode: "818 32"
                    },
                    storeMapUrl: "/ms/sv_SE/img/local_store_info/gavle/Karta_Gävle_app.jpg",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "398",
                    name: "Göteborg Bäckebol",
                    storeUrl: "/se/sv/stores/398",
                    storeLocation: {
                        longitude: "11.999672",
                        latitude: "57.771771"
                    },
                    storeAddress: {
                        cityName: "Hisings Backa",
                        address1: "Transportgatan 23",
                        zipCode: "422 46"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.goteborg_backebolVA15.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "IKEA Kundservice"
                        }]
                    }
                }, {
                    value: "014",
                    name: "Göteborg Kållered",
                    storeUrl: "/se/sv/stores/014",
                    storeLocation: {
                        longitude: "12.048397",
                        latitude: "57.60379"
                    },
                    storeAddress: {
                        cityName: "Kållered",
                        address1: "Kållered Köpstad",
                        address2: "Ekenleden 2",
                        zipCode: "428 36"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.goteborg_kallered.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "470",
                    name: "HaparandaTornio",
                    storeUrl: "/se/sv/stores/470",
                    storeLocation: {
                        longitude: "24.13192",
                        latitude: "65.842982"
                    },
                    storeAddress: {
                        cityName: "Haparanda",
                        address1: "Norrskensvägen 2",
                        zipCode: "953 36"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_images/store_maps/se.ikea.haparanda_fy18.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "468",
                    name: "Helsingborg",
                    storeUrl: "/se/sv/stores/468",
                    storeLocation: {
                        longitude: "12.760899",
                        latitude: "56.092426"
                    },
                    storeAddress: {
                        cityName: "Helsingborg",
                        address1: "Väla centrum",
                        address2: "Marknadsvägen 7",
                        zipCode: "260 36"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/helsingborg/IKEA Helsingborg_shopping guide_FY19.jpg",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "109",
                    name: "Jönköping",
                    storeUrl: "/se/sv/stores/109",
                    storeLocation: {
                        longitude: "14.205751",
                        latitude: "57.77267"
                    },
                    storeAddress: {
                        cityName: "Jönköping",
                        address1: "A6-center",
                        address2: "Kompanigatan 3",
                        zipCode: "550 11"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/VaruhuskartaJonkopingFY19.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "469",
                    name: "Kalmar",
                    storeUrl: "/se/sv/stores/469",
                    storeLocation: {
                        longitude: "16.321199",
                        latitude: "56.68556"
                    },
                    storeAddress: {
                        cityName: "Kalmar",
                        address1: "Bilbyggarevägen 6",
                        zipCode: "393 56"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.kalmar.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "471",
                    name: "Karlstad",
                    storeUrl: "/se/sv/stores/471",
                    storeLocation: {
                        longitude: "13.41966",
                        latitude: "59.378797"
                    },
                    storeAddress: {
                        cityName: "Karlstad",
                        address1: "Bergviksvägen 43",
                        zipCode: "653 46"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/ikeakarlstad20141106.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "017",
                    name: "Linköping",
                    storeUrl: "/se/sv/stores/017",
                    storeLocation: {
                        longitude: "15.58755",
                        latitude: "58.433189"
                    },
                    storeAddress: {
                        cityName: "Linköping",
                        address1: "Svedengatan 7",
                        zipCode: "582 73"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.linkoping.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "445",
                    name: "Malmö",
                    storeUrl: "/se/sv/stores/445",
                    storeLocation: {
                        longitude: "12.986215",
                        latitude: "55.552634"
                    },
                    storeAddress: {
                        cityName: "Malmö",
                        address1: "Kulthusgatan 1",
                        zipCode: "215 86"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.malmo.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "019",
                    name: "Stockholm Barkarby",
                    storeUrl: "/se/sv/stores/019",
                    storeLocation: {
                        longitude: "17.857064",
                        latitude: "59.420331"
                    },
                    storeAddress: {
                        cityName: "Järfälla",
                        address1: "Folkungavägen 50",
                        zipCode: "177 35"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.barkarby.jpg",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "012",
                    name: "Stockholm Kungens Kurva",
                    storeUrl: "/se/sv/stores/012",
                    storeLocation: {
                        longitude: "17.916201",
                        latitude: "59.271155"
                    },
                    storeAddress: {
                        cityName: "Kungens Kurva",
                        address1: "Modulvägen 1",
                        address2: "Box 8041",
                        zipCode: "14108"
                    },
                    storeMapUrl: "/ms/sv_SE/img/local_store_info/kurvan/plan_saluhall.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "467",
                    name: "Sundsvall",
                    storeUrl: "/se/sv/stores/467",
                    storeLocation: {
                        longitude: "17.334119",
                        latitude: "62.444195"
                    },
                    storeAddress: {
                        cityName: "Sundsvall",
                        address1: "Gesällvägen 3",
                        zipCode: "857 53"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.sundsvall.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "053",
                    name: "Uddevalla",
                    storeUrl: "/se/sv/stores/053",
                    storeLocation: {
                        longitude: "11.818371",
                        latitude: "58.355878"
                    },
                    storeAddress: {
                        cityName: "Uddevalla",
                        address1: "Östra Torpvägen 30",
                        zipCode: "45176"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/Shoppingguide_IKEA_Uddevalla_171221.jpg",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "416",
                    name: "Umeå",
                    storeUrl: "/se/sv/stores/416",
                    storeLocation: {
                        longitude: "20.25501",
                        latitude: "63.80771"
                    },
                    storeAddress: {
                        cityName: "Umeå",
                        address1: "Marknadsgatan 1",
                        zipCode: "90422"
                    },
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775 - 700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "070",
                    name: "Uppsala",
                    storeUrl: "/se/sv/stores/070",
                    storeLocation: {
                        longitude: "17.692156",
                        latitude: "59.847755"
                    },
                    storeAddress: {
                        cityName: "Uppsala",
                        address1: "Fyrislund",
                        address2: "Rapsgatan 3",
                        zipCode: "753 23"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.uppsala.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "020",
                    name: "Västerås",
                    storeUrl: "/se/sv/stores/020",
                    storeLocation: {
                        longitude: "16.456017",
                        latitude: "59.607596"
                    },
                    storeAddress: {
                        cityName: "Västerås",
                        address1: "Domkraftsgatan 2",
                        zipCode: "721 38"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.vasteras.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "268",
                    name: "Älmhult",
                    storeUrl: "/se/sv/stores/268",
                    storeLocation: {
                        longitude: "14.161674",
                        latitude: "56.550534"
                    },
                    storeAddress: {
                        cityName: "Älmhult",
                        address1: "Handelsvägen 4",
                        zipCode: "343 33"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.almhult.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "+46(0)72-352 81 21",
                            storeContactMethodText: "För företag"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Beställ via telefon"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                }, {
                    value: "106",
                    name: "Örebro",
                    storeUrl: "/se/sv/stores/106",
                    storeLocation: {
                        longitude: "15.134397",
                        latitude: "59.211089"
                    },
                    storeAddress: {
                        cityName: "Örebro",
                        address1: "Kundvägen 2",
                        zipCode: "702 36"
                    },
                    storeMapUrl: "/ms/sv_SE/img/store_images/store_maps/se.ikea.orebro.fy18.png",
                    timeZone: "Europe/Stockholm",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "0775-700 500",
                            storeContactMethodText: "Kundservice"
                        }]
                    }
                },

  // PL

  {
                    value: "429",
                    name: "Bydgoszcz",
                    storeUrl: "/pl/pl/stores/429",
                    storeLocation: {
                        longitude: "18.119955",
                        latitude: "53.131665"
                    },
                    storeAddress: {
                        cityName: "Bydgoszcz",
                        address1: "ul, Skandynawska 1",
                        zipCode: "85-776"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(52) 526 41 99",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }, {
                    value: "203",
                    name: "Gdańsk",
                    storeUrl: "/pl/pl/stores/203",
                    storeLocation: {
                        longitude: "18.517787",
                        latitude: "54.37334"
                    },
                    storeAddress: {
                        cityName: "Gdańsk",
                        address1: "Złota Karczma 26",
                        zipCode: "80-298"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(58) 769 94 20",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }, {
                    value: "306",
                    name: "Katowice",
                    storeUrl: "/pl/pl/stores/306",
                    storeLocation: {
                        longitude: "19.059857",
                        latitude: "50.270677"
                    },
                    storeAddress: {
                        cityName: "Katowice",
                        address1: "Al. W. Roździeńskiego 95",
                        zipCode: "40-203"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(32) 789 81 11",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }, {
                    value: "204",
                    name: "Kraków",
                    storeUrl: "/pl/pl/stores/204",
                    storeLocation: {
                        longitude: "19.898223",
                        latitude: "50.089585"
                    },
                    storeAddress: {
                        cityName: "Kraków",
                        address1: "Josepha Conrada 66",
                        zipCode: "31-357"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(12) 293 11 87",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }, {
                    value: "311",
                    name: "Lublin",
                    storeUrl: "/pl/pl/stores/311",
                    storeLocation: {
                        longitude: "22.572879",
                        latitude: "51.281585"
                    },
                    storeAddress: {
                        cityName: "Lublin",
                        address1: "Aleja Spółdzielczości Pracy 86",
                        zipCode: "20-147"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 01 23",
                            storeContactMethodText: "IKEA dla firm"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 02 75",
                            storeContactMethodText: "Meble na telefon"
                        }]
                    }
                }, {
                    value: "329",
                    name: "Łódź",
                    storeUrl: "/pl/pl/stores/329",
                    storeLocation: {
                        longitude: "19.412817",
                        latitude: "51.701928"
                    },
                    storeAddress: {
                        cityName: "Łódź",
                        address1: "Pabianicka 255",
                        zipCode: "93-457"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(42) 291 38 82",
                            storeContactMethodText: "Transport-montaz"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(42) 291 31 65",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 02 75",
                            storeContactMethodText: "Meble na telefon"
                        }]
                    }
                }, {
                    value: "205",
                    name: "Poznań",
                    storeUrl: "/pl/pl/stores/205",
                    storeLocation: {
                        longitude: "16.98837",
                        latitude: "52.382666"
                    },
                    storeAddress: {
                        cityName: "Poznań",
                        address1: "Szwedzka 10",
                        zipCode: "61-285"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(61) 650 72 62",
                            storeContactMethodText: "Transport"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(61) 650 72 63",
                            storeContactMethodText: "Montaż mebli kuchennych:"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(61) 650 72 65",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }, {
                    value: "623",
                    name: "Warszawa / Blue City",
                    storeUrl: "/pl/pl/stores/623",
                    storeLocation: {
                        longitude: "20.956015",
                        latitude: "52.212711"
                    },
                    storeAddress: {
                        cityName: "Warszawa",
                        address1: "C.H. Blue City, Aleje Jerozolimskie 179",
                        zipCode: "02-222"
                    },
                    timeZone: "Europe/Warsaw"
                }, {
                    value: "188",
                    name: "Warszawa / Janki",
                    storeUrl: "/pl/pl/stores/188",
                    storeLocation: {
                        longitude: "20.897065",
                        latitude: "52.132764"
                    },
                    storeAddress: {
                        cityName: "Raszyn",
                        address1: "Pl. Szwedzki 1",
                        zipCode: "05-090"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj sie z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 703 12 25",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }, {
                    value: "307",
                    name: "Warszawa / Targówek",
                    storeUrl: "/pl/pl/stores/307",
                    storeLocation: {
                        longitude: "21.082417",
                        latitude: "52.305317"
                    },
                    storeAddress: {
                        cityName: "Warszawa",
                        address1: "Malborska 51",
                        zipCode: "03-286"
                    },
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 334-45-31",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }, {
                    value: "294",
                    name: "Wrocław",
                    storeUrl: "/pl/pl/stores/294",
                    storeLocation: {
                        longitude: "16.959003",
                        latitude: "51.048571"
                    },
                    storeAddress: {
                        cityName: "Kobierzyce",
                        address1: "Bielany Wr. Czekoladowa 5a",
                        zipCode: "55-040"
                    },
                    storeMapUrl: "/ms/pl_PL/img/store_images/store_maps/mapa_wroclaw.jpg",
                    timeZone: "Europe/Warsaw",
                    storeContactInfo: {
                        storeContactMethodList: [{
                            storeContactMethodType: "PHONE",
                            phoneNo: "(22) 275 00 00",
                            storeContactMethodText: "Skontaktuj się z nami"
                        }, {
                            storeContactMethodType: "PHONE",
                            phoneNo: "(71) 360 77 90",
                            storeContactMethodText: "Punkt Ratalny IKANO"
                        }]
                    }
                }

      ];

const mapped = stores.map(function(store) {

  store["name"] = store["name"].replace(/^IKEA /, '');

  const locale = store["storeUrl"].match(/^\/([a-z]{2})\/([a-z]{2})/)
  store["_locale"] = {country: locale[1], language: locale[2]};

  return store;
});

console.log(JSON.stringify(mapped));
