from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p> hello world! <p>"

@app.route("/name")
def name():
    return "<p> sarvagnya vijay <p>"

@app.route("/major")
def major():
    return "<p> stats & cs <p>"

@app.route("/interests")
def interests():
    return "<p> guitar, anime, reading <p>"

@app.route("/videogame")
def game():
    return "<p> i play valorant sadly <p>"

@app.route("/anime")
def anime():
    return "<p> im watching sword art online rn <p>"