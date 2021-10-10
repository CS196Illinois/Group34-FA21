from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQL_ALCHEMY_URI"] = "mysql+pymysql://admin:$mysql5467V@localhost/greenthumb"
db = SQLAlchemy(app)

@app.route("/home", methods = ['GET'])
def main_page():
    return "hello"