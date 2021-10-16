import firebase_admin
from flask import Flask
from dotenv import load_dotenv
import uuid
import os
from firebase_admin import credentials, db, firestore, initialize_app

load_dotenv()
TOKEN = os.environ.get('GOOGLE_APP_CRED')
PATH = os.environ.get('DATABASEURL')
app = Flask(__name__)

#initializing firebase obj
cred = firebase_admin.credentials.Certificate(TOKEN)
default_app = firebase_admin.initialize_app(cred, {"databaseURL": str(PATH)})

ref = db.reference()

#sample json
listings_ref = ref.child('listings')
listings_ref.set({
   0 : {
        "id": "9384",
        "name": "apple",
        "price": 0.50,
        "seller": "Joe Brown",
        "zipcode": 61801
    },
   1: {
        "id": "0909",
        "name": "apple",
        "price": 0.50,
        "seller": "Joe Brown",
        "zipcode": 61801
    }
})

@app.route("/home", methods = ['GET'])
def main_page():
    print(ref.get())
    return ref.get()