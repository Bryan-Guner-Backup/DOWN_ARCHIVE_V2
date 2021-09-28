import random

import pandas as pd
from flask import Flask, render_template, request

API = Flask(__name__)


@API.route('/')
def home():
    rand_val = random.randint(1, 20)
    return render_template(
        "home.html",
        rand_val=rand_val,
    )


@API.route("/about")
def about():
    data = pd.read_csv("data.csv")
    return render_template(
        "about.html",
        data=data.to_html(index=False),
    )


@API.route("/contact", methods=["GET", "POST"])
def contact():
    data = {
        "Name": request.values.get("Name"),
        "Email": request.values.get("Email"),
        "Favorite": request.values.get("Favorite"),
        "Message": request.values.get("Message") or "",
        "Surf": request.values.get("Surf") or False,
        "Permission": request.values.get("Permission") or False,
    }
    if data.get("Name"):
        df = pd.read_csv("data.csv", index_col="id")
        df.loc[len(df.index)] = data.values()
        df.to_csv("data.csv")
    return render_template("contact.html")


if __name__ == '__main__':
    API.run()
