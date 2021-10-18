import firebase_admin
from flask import Flask, jsonify
from dotenv import load_dotenv
import requests
import os
import json
from firebase_admin import credentials, db, firestore, initialize_app

load_dotenv()
TOKEN = os.environ.get("GOOGLE_APP_CRED")
PATH = os.environ.get('DATABASEURL')

app = Flask(__name__)

#initializing firebase obj
cred = firebase_admin.credentials.Certificate(TOKEN)
default_app = firebase_admin.initialize_app(cred, {"databaseURL": str(PATH)})

ref = db.reference()
listings_ref = ref.child('listings')

f = open('listings.json')
for listing in f:
    for key, value in listing:
        if (key == "name"):
            d = {"name": value}
            response = requests.get("https://shelf-life-api.herokuapp.com/search", params = d )
listings_ref.set(json.load(f))
f.close()

@app.route("/home", methods = ['GET'])
def main_page():
    print(ref.get())
    return jsonify(ref.get())