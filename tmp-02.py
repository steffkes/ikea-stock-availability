import streamlit as st
import pandas as pd
import numpy as np
import altair as alt
import pydeck as pdk

st.set_page_config(layout="wide")

locations = {
    "066": {
        "name": "IKEA Augsburg",
        "location": {"longitude": "10.871165", "latitude": "48.404947"},
    },
    "324": {
        "name": "IKEA Berlin-Lichtenberg",
        "location": {"longitude": "13.514063", "latitude": "52.534041"},
    },
    "394": {
        "name": "IKEA Berlin-Spandau",
        "location": {"longitude": "13.214343", "latitude": "52.527997"},
    },
    "421": {
        "name": "IKEA Berlin-Tempelhof",
        "location": {"longitude": "13.365855", "latitude": "52.469880"},
    },
    "129": {
        "name": "IKEA Berlin-Waltersdorf",
        "location": {"longitude": "13.555562", "latitude": "52.366900"},
    },
    "119": {
        "name": "IKEA Bielefeld",
        "location": {"longitude": "8.492475", "latitude": "51.982224"},
    },
    "117": {
        "name": "IKEA Braunschweig",
        "location": {"longitude": "10.504367", "latitude": "52.308754"},
    },
    "412": {
        "name": "IKEA Bremerhaven",
        "location": {"longitude": "8.601910", "latitude": "53.493494"},
    },
    "228": {
        "name": "IKEA Brinkum",
        "location": {"longitude": "8.803546", "latitude": "53.026271"},
    },
    "118": {
        "name": "IKEA Chemnitz",
        "location": {"longitude": "12.859647", "latitude": "50.802463"},
    },
    "223": {
        "name": "IKEA Dortmund",
        "location": {"longitude": "7.368908", "latitude": "51.491244"},
    },
    "221": {
        "name": "IKEA Dresden",
        "location": {"longitude": "13.695145", "latitude": "51.086461"},
    },
    "425": {
        "name": "IKEA Duisburg",
        "location": {"longitude": "6.764252", "latitude": "51.482412"},
    },
    "321": {
        "name": "IKEA Düsseldorf",
        "location": {"longitude": "6.848602", "latitude": "51.187763"},
    },
    "396": {
        "name": "IKEA Erfurt",
        "location": {"longitude": "10.949421", "latitude": "50.959535"},
    },
    "148": {
        "name": "IKEA Essen",
        "location": {"longitude": "7.000179", "latitude": "51.460371"},
    },
    "393": {
        "name": "IKEA Frankfurt",
        "location": {"longitude": "8.656883", "latitude": "50.195515"},
    },
    "320": {
        "name": "IKEA Freiburg",
        "location": {"longitude": "7.832801", "latitude": "48.028882"},
    },
    "226": {
        "name": "IKEA Großburgwedel",
        "location": {"longitude": "9.837956", "latitude": "52.492436"},
    },
    "139": {
        "name": "IKEA Halle/Leipzig",
        "location": {"longitude": "12.183044", "latitude": "51.348520"},
    },
    "245": {
        "name": "IKEA Hamburg-Altona",
        "location": {"longitude": "9.941504", "latitude": "53.552165"},
    },
    "325": {
        "name": "IKEA Hamburg-Moorfleet",
        "location": {"longitude": "10.092938", "latitude": "53.511237"},
    },
    "146": {
        "name": "IKEA Hamburg-Schnelsen",
        "location": {"longitude": "9.928164", "latitude": "53.648950"},
    },
    "222": {
        "name": "IKEA Hanau",
        "location": {"longitude": "8.942442", "latitude": "50.149819"},
    },
    "187": {
        "name": "IKEA Hannover EXPO-Park",
        "location": {"longitude": "9.817421", "latitude": "52.313595"},
    },
    "494": {
        "name": "IKEA Kaarst",
        "location": {"longitude": "6.640966", "latitude": "51.211061"},
    },
    "430": {
        "name": "IKEA Kaiserslautern",
        "location": {"longitude": "7.695360", "latitude": "49.437424"},
    },
    "323": {
        "name": "IKEA Kamen",
        "location": {"longitude": "7.669101", "latitude": "51.569695"},
    },
    "551": {
        "name": "IKEA Karlsruhe",
        "location": {"longitude": "38.925", "latitude": "45.0125"},
    },
    "174": {
        "name": "IKEA Kassel",
        "location": {"longitude": "9.525447", "latitude": "51.277461"},
    },
    "333": {
        "name": "IKEA Kiel",
        "location": {"longitude": "10.106971", "latitude": "54.314270"},
    },
    "332": {
        "name": "IKEA Koblenz",
        "location": {"longitude": "7.564516", "latitude": "50.381707"},
    },
    "102": {
        "name": "IKEA Köln-Butzweilerhof",
        "location": {"longitude": "6.900251", "latitude": "50.982384"},
    },
    "147": {
        "name": "IKEA Köln-Godorf",
        "location": {"longitude": "6.971276", "latitude": "50.861349"},
    },
    "289": {
        "name": "IKEA Lübeck",
        "location": {"longitude": "10.737548", "latitude": "53.914753"},
    },
    "225": {
        "name": "IKEA Ludwigsburg",
        "location": {"longitude": "9.153950", "latitude": "48.918579"},
    },
    "520": {
        "name": "IKEA Magdeburg",
        "location": {"longitude": "11.61184", "latitude": "52.16676"},
    },
    "397": {
        "name": "IKEA Mannheim",
        "location": {"longitude": "8.444066", "latitude": "49.555744"},
    },
    "343": {
        "name": "IKEA München-Brunnthal",
        "location": {"longitude": "11.658297", "latitude": "48.040648"},
    },
    "063": {
        "name": "IKEA München-Eching",
        "location": {"longitude": "11.633620", "latitude": "48.304550"},
    },
    "326": {
        "name": "IKEA Nürnberg/Fürth",
        "location": {"longitude": "11.009331", "latitude": "49.485231"},
    },
    "069": {
        "name": "IKEA Oldenburg",
        "location": {"longitude": "8.252749", "latitude": "53.139292"},
    },
    "184": {
        "name": "IKEA Osnabrück",
        "location": {"longitude": "7.971268", "latitude": "52.263075"},
    },
    "229": {
        "name": "IKEA Regensburg",
        "location": {"longitude": "12.177186", "latitude": "49.002069"},
    },
    "092": {
        "name": "IKEA Rostock",
        "location": {"longitude": "12.048569", "latitude": "54.107232"},
    },
    "227": {
        "name": "IKEA Saarlouis",
        "location": {"longitude": "6.760068", "latitude": "49.293841"},
    },
    "369": {
        "name": "IKEA Siegen",
        "location": {"longitude": "8.001995", "latitude": "50.862920"},
    },
    "224": {
        "name": "IKEA Sindelfingen",
        "location": {"longitude": "9.005785", "latitude": "48.701229"},
    },
    "328": {
        "name": "IKEA Ulm",
        "location": {"longitude": "9.977002", "latitude": "48.404263"},
    },
    "322": {
        "name": "IKEA Wallau",
        "location": {"longitude": "8.371732", "latitude": "50.058819"},
    },
    "075": {
        "name": "IKEA Walldorf",
        "location": {"longitude": "8.629396", "latitude": "49.305916"},
    },
    "493": {
        "name": "IKEA Wetzlar",
        "location": {"longitude": "8.49747", "latitude": "50.56793"},
    },
    "492": {
        "name": "IKEA Wuppertal",
        "location": {"longitude": "7.251961", "latitude": "51.308316"},
    },
    "124": {
        "name": "IKEA Würzburg",
        "location": {"longitude": "9.983997", "latitude": "49.820985"},
    },
}


@st.cache
def load_data():
    data = pd.read_json(
        "tmp/70277957-latest.jsonl.gz",
        lines=True,
        compression="gzip",
        dtype={"store_id": object, "article_id": object},
    )

    location = data["store_id"].apply(
        lambda store_id: pd.Series(
            {
                "store_name": locations[store_id]["name"],
                "lat": float(locations[store_id]["location"]["latitude"]),
                "lon": float(locations[store_id]["location"]["longitude"]),
            }
        )
    )
    data[location.columns] = location
    return data


df = load_data()

if st.checkbox("Show raw data"):
    df

st.write(
    pdk.Deck(
        map_style="mapbox://styles/mapbox/light-v9",
        initial_view_state={
            "latitude": 51.0913044,
            "longitude": 10.053354,
            "zoom": 5,
            "pitch": 40,
        },
        tooltip=True,
        layers=[
            pdk.Layer(
                "HeatmapLayer",
                data=df,
                opacity=1.0,
                get_position=["lon", "lat"],
                get_weight="available_stock",
                pickable=True,
                #color_range=[[230, 158, 10], [10, 230, 120]],
                #aggregation=pdk.types.String("MEAN"),
                # color_range=[
                # [240, 249, 232],
                # [204, 235, 197],
                # [168, 221, 181],
                # [123, 204, 196],
                # [67, 162, 202],
                # [8, 104, 172],
                # ],
                # threshold=0,
                # auto_highlight=True,
            ),
        ],
    )
)
st.altair_chart(
    alt.Chart(df)
    .mark_bar()
    .encode(
        x="store_name",
        y="available_stock",
        tooltip=[
            "store_name",
            "available_stock",
        ],
    ),
    use_container_width=True,
)
