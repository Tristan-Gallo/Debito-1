from flask import Flask, jsonify
import json

app = Flask(__name__)

with open('pokemon2_data.json', 'r') as f:
    coordinates = json.load(f)

@app.route('/all', methods=['GET'])
def get_all_coordinates():
    return jsonify(coordinates)

if __name__ == '__main__':
    app.run()
