import streamlit as st
import pandas as pd
import numpy as np
import altair as alt
import pydeck as pdk
import json

st.set_page_config(layout="wide")

stores = dict(
    [
        (
            store["value"],
            {
                "name": store["name"],
                "location": {
                    "lon": float(store["storeLocation"]["longitude"]),
                    "lat": float(store["storeLocation"]["latitude"]),
                },
            },
        )
        for store in json.load(open("./stores.json"))
    ]
)


def computed_stats(row):
    record = {"map_fill_color": [0, 192, 0, 50], "map_line_color": [0, 192, 0, 255]}

    if row["available_stock"] == 0:
        record["map_fill_color"] = [255, 0, 0, 255]
        record["map_line_color"] = [255, 0, 0, 255]

    return pd.Series(record)


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
                "store_name": stores[store_id]["name"],
                "lat": stores[store_id]["location"]["lat"],
                "lon": stores[store_id]["location"]["lon"],
            }
        )
    )
    data[location.columns] = location

    stats = data.apply(computed_stats, axis=1)
    data[stats.columns] = stats

    return data


df = load_data()

if st.checkbox("Show raw data"):
    df

st.pydeck_chart(
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
                "ScatterplotLayer",
                data=df,
                pickable=True,
                stroked=True,
                filled=True,
                radius_scale=50,
                radius_min_pixels=1,
                radius_max_pixels=100,
                line_width_min_pixels=1,
                get_position=["lon", "lat"],
                get_radius="100",
                get_fill_color="map_fill_color",
                get_line_color="map_line_color",
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
