
from pymongo import MongoClient
from flask import Flask, jsonify
import json
import random

app = Flask(__name__)

# Connessione a MongoDB
client = MongoClient("mongodb+srv://root:pass@cluster0.olw9u.mongodb.net/Avengers")
db = client.Avengers


# Carica i dati da un file JSON
with open("avengers.json") as f:
    avengers_data = json.load(f)

@app.route('/capitan-america')
def capitan_america():
    avenger = random.choice(avengers_data["capitan-america"])
    return jsonify(avenger)

@app.route('/thor')
def thor():
    avenger = random.choice(avengers_data["thor"])
    return jsonify(avenger)

@app.route('/spiderman')
def spiderman():
    avenger = random.choice(avengers_data["spiderman"])
    return jsonify(avenger)

@app.route('/iron-man')
def iron_man():
    avenger = random.choice(avengers_data["iron-man"])
    return jsonify(avenger)

@app.route('/all')
def get_all_coordinates():
    all_coordinates = db.locations.find({}, {"_id": 0})
    return jsonify(list(all_coordinates))

# ... (Resto del codice)
if __name__ == '__main__':
    app.run()
