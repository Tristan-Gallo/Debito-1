from flask import Flask, jsonify
import json
import random

app = Flask(__name__)

with open('coordinates.json') as f:
    coordinates_data = json.load(f)

@app.route('/all', methods=['GET'])
def get_all_coordinates():
    return jsonify(coordinates_data)

@app.route('/raffaello', methods=['GET'])
def get_raffaello_coordinate():
    selected_coordinate = random.choice(coordinates_data)
    return jsonify(selected_coordinate)

@app.route('/donatello', methods=['GET'])
def get_donatello_coordinate():
    selected_coordinate = random.choice(coordinates_data)
    return jsonify(selected_coordinate)

@app.route('/michelangelo', methods=['GET'])
def get_michelangelo_coordinate():
    selected_coordinate = random.choice(coordinates_data)
    return jsonify(selected_coordinate)

@app.route('/leonardo', methods=['GET'])
def get_leonardo_coordinate():
    selected_coordinate = random.choice(coordinates_data)
    return jsonify(selected_coordinate)

if __name__ == '__main__':
    app.run()
