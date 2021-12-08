from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/llama")
def llama():
    return "llamaOwO"

@app.route("/intro")
def intro():
    return "Hello, I am Relena Li. My major is computer science, and I like sleeping :)"

@app.route("/fruit")
def fruit():
    return "Strawberry"