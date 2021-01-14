import streamlit as st
import pandas as pd
import altair as alt


def compute_diff(row):
    if row["restock_date"] is None or row["restock_date"] == pd.np.nan:
        return None

    else:
        return (row["restock_date"] - row["_fetched_at"]).days


@st.cache
def load_data():
    data = pd.read_json(
        "tmp/70277957-328-restock.jsonl.gz", lines=True, compression="gzip"
    )
    data["restock_date"] = pd.to_datetime(data["restock_date"], utc=True)
    data = data.replace({pd.np.nan: None})
    data["restock_diff"] = data.apply(compute_diff, axis=1)
    return data


df = load_data()

if st.checkbox("Show raw data"):
    df

st.altair_chart(
    alt.layer(
        alt.Chart(df)
        .mark_line(color="steelblue", opacity=0.5)
        .encode(
            x=alt.X("_fetched_at", axis=alt.Axis(format="%d.%m")),
            y=alt.Y("available_stock", axis=alt.Axis(titleColor="steelblue")),
        ),
        alt.Chart(df)
        .mark_line(color="red", opacity=0.5)
        .encode(
            x="_fetched_at",
            y=alt.Y("restock_date", axis=alt.Axis(format="%d.%m", titleColor="red")),
            tooltip=[
                "_fetched_at",
                "store_id",
                "restock_date",
                "restock_diff",
                "available_stock",
            ],
        )
        .interactive(),
    ).resolve_scale(y="independent"),
    use_container_width=True,
)

st.altair_chart(
    alt.layer(
        alt.Chart(df)
        .mark_line(color="steelblue", opacity=0.5)
        .encode(
            x=alt.X("_fetched_at", axis=alt.Axis(format="%d.%m")),
            y=alt.Y("available_stock", axis=alt.Axis(titleColor="steelblue")),
        ),
        alt.Chart(df)
        .mark_line(color="red", opacity=0.5)
        .encode(
            x="_fetched_at",
            y=alt.Y(
                "restock_diff",
                axis=alt.Axis(titleColor="red", title="restock in x days"),
            ),
            tooltip=[
                "_fetched_at",
                "store_id",
                "restock_date",
                "restock_diff",
                "available_stock",
            ],
        )
        .interactive(),
    ).resolve_scale(y="independent"),
    use_container_width=True,
)
