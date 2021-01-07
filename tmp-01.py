import streamlit as st
import pandas as pd
import altair as alt


@st.cache
def load_data():
    data = pd.read_json("tmp/70277957-328-restock.jsonl.gz", lines=True, compression="gzip")
    return data


df = load_data()

if st.checkbox("Show raw data"):
    df

st.altair_chart(
    alt.layer(
        alt.Chart(df)
        .mark_line(color="steelblue", opacity=0.25)
        .encode(
            x=alt.X(
              "_fetched_at",
              axis=alt.Axis(format='%d.%m')
            ),
            y=alt.Y(
              "available_stock",
              axis=alt.Axis(titleColor="steelblue")
            ),
        ),
        alt.Chart(df)
        .mark_line(color="red")
        .encode(
            x="_fetched_at",
            y=alt.Y(
              "restock_date:T",
              axis=alt.Axis(format='%d.%m', grid=True, titleColor="red")
            ),
            tooltip=["_fetched_at", "store_id", "restock_date:T", "available_stock"],
        )
        .interactive()
    ).resolve_scale(y='independent'),
    use_container_width=True,
)
