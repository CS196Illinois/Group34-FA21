from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/apName")
def myName():
    return "<p>Hi!!! I'm Apoorva Sannasi :D</p>"

@app.route("/apMajor")
def myMajor():
    return "<p>oOoOoOo Computer Science oOoOoOo</p>"

@app.route("/apInt")
def myInterests():
    return "<p>! DC comics ! nail art ! crafts ! running !</p>"

@app.route("/apState")
def myState():
    return "<p>I'm from California :)</p>"

@app.route("/apHero")
def myHero():
    return "<p>I love Batman!</p>"
