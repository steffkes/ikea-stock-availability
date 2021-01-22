import streamlit as st
import pandas as pd
import numpy as np
import altair as alt
import pydeck as pdk
from datetime import datetime
import json
import os

ROOT_PATH = os.environ["ROOT"]

st.set_page_config(layout="wide")

stores = dict(
    [
        (
            store["value"],
            {
                "store_name": store["name"][5:],
                "lon": float(store["storeLocation"]["longitude"]),
                "lat": float(store["storeLocation"]["latitude"]),
            },
        )
        for store in json.load(open(os.path.join(ROOT_PATH, "stores.json")))
    ]
)


def computed_stats(row):
    record = {"map_fill_color": [0, 192, 0, 50], "map_line_color": [0, 192, 0, 255]}

    if row["available_stock"] == 0:
        record["map_fill_color"] = [255, 0, 0, 255]
        record["map_line_color"] = [255, 0, 0, 255]

    return pd.Series(record)


@st.cache
def load_products():
    data = pd.read_json(
        os.path.join(ROOT_PATH, "tmp/products.jsonl"),
        lines=True,
        dtype={"id": object},
    )

    return data


@st.cache(allow_output_mutation=True)
def load_data():
    data = pd.read_json(
        os.path.join(ROOT_PATH, "tmp/latest.jsonl.gz"),
        lines=True,
        compression="gzip",
        dtype={"store_id": object, "article_id": object},
    )
    data["date"] = data["fetched_at"].map(
        lambda fetched_at: fetched_at.strftime("%Y-%m-%d")
    )

    location = data["store_id"].apply(lambda store_id: pd.Series(stores[store_id]))
    data[location.columns] = location

    stats = data.apply(computed_stats, axis=1)
    data[stats.columns] = stats

    return data


df = load_data()
products = load_products()

selected_article_id = st.sidebar.selectbox(
    "Article to visualize", products["id"].unique()
)

product = products[products["id"] == selected_article_id].iloc[0]

st.sidebar.title(
    "%s %s (%s)"
    % (product["name"], product["typeName"], product["itemMeasureReferenceText"])
)
st.sidebar.write(product["pipUrl"])
st.sidebar.image(product["mainImageUrl"], width=100)

selected_date = st.sidebar.slider(
    label="",
    min_value=datetime(2021, 1, 15),
    value=datetime(2021, 1, 22),
    max_value=datetime(2021, 1, 22),
    format="YYYY-MM-DD",
)

article_data = df[(df["article_id"] == selected_article_id)]
data = article_data[(df["date"] == selected_date.strftime("%Y-%m-%d"))]

st.sidebar.write(
    "Last updated: %s" % data["fetched_at"].max().strftime("%Y-%m-%d %H:%M:%S UTC")
)

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
                data=data,
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
    alt.Chart(data)
    .mark_bar()
    .encode(
        x="store_name",
        y=alt.Y(
            "available_stock",
            scale=alt.Scale(
                domain=(0, article_data["available_stock"].max()), type="linear"
            ),
        ),
        tooltip=[
            "store_name",
            "available_stock",
        ],
    ),
    use_container_width=True,
)

if st.checkbox("Show raw data"):
    data
