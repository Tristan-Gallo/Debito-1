from flask import Flask, jsonify
import json
import random
import pymongo

app = Flask(__name__)

# Connessione a MongoDB
connection_string = "mongodb+srv://root:pass@cluster0.olw9u.mongodb.net/Avengers"
client = pymongo.MongoClient(connection_string)
db = client.Avengers
locations_collection = db.locations

# Stringa di connessione
connection_string = "mongodb+srv://root:pass@cluster0.olw9u.mongodb.net/Avengers"

# Connessione al database
client = pymongo.MongoClient(connection_string)
db = client.Avengers  # Assume che il nome del database sia "Avengers"
locations_collection = db.locations

# Esempio di recupero dei dati
avenger_location = locations_collection.find_one({"name": "Capitan America"})
print(avenger_location)

@app.route('/all')
def get_all_coordinates():
    coordinates = []
    for avenger in locations_collection.find():
        coordinates.append(avenger)
    return jsonify(coordinates)


# Carica i dati dei tuoi Avengers dal file JSON
with open('avengers_data.json') as f:
    avengers_data = json.load(f)

@app.route('/capitan-america')
def capitan_america():
    avenger = random.choice(avengers_data)
    return jsonify(avenger)

@app.route('/thor')
def thor():
    avenger = random.choice(avengers_data)
    return jsonify(avenger)

@app.route('/spiderman')
def spiderman():
    avenger = random.choice(avengers_data)
    return jsonify(avenger)

@app.route('/iron-man')
def iron_man():
    avenger = random.choice(avengers_data)
    return jsonify(avenger)

if __name__ == '__main__':
    app.run(debug=True)
