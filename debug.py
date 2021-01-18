import streamlit as st
import pandas as pd
import altair as alt


@st.cache
def load_data():
    data = pd.read_json("/data/stock.jsonl.gz", lines=True, compression="gzip")
    return data


df = load_data()

if st.checkbox("Show raw data"):
    df

for article_id in df["article_id"].unique():
    df1 = df[(df["article_id"] == article_id)]
    article_id

    st.altair_chart(
        alt.Chart(df1)
        .mark_line()
        .encode(
            x="_fetched_at",
            y="stock",
            color="store_id:N",
            tooltip=["_fetched_at", "store_id", "stock"],
        ),
        use_container_width=True,
    )
