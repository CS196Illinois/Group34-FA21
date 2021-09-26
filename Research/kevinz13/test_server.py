from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/about")
def about_me():
    return "<p>My name is Kevin Zhang and I am a Stats + CS Major. My interests include investing, watching anime, and playing games.</p>"

@app.route("/yo")
def yo():
    return "<p>Yo, I am an endpoint on a flask server.</p>"

@app.route("/bye")
def bye():
    return "<p>See you later!</p>"