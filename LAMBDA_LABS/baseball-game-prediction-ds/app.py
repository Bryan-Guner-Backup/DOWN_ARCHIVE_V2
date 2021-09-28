'''Access point for prediction model'''

import json
import pickle

import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS

model = pickle.load(open('cat_pickle.pkl', 'rb'))

app = Flask(__name__)
CORS(app)


# Drop API route for access
@app.route('/', methods=['POST'])

def prediction():
    # Get input values from request
    data = request.get_json(force=True)
    # # Wrangle data to pass model input standards
    #     data_in = json.loads(data)
    #     game = list(data_in.values())
    # convert data into dataframe
    data.update((x, [y]) for x, y in data.items())
    data_df = pd.DataFrame.from_dict(data)
    # Make prediction with input data
    predicted = model.predict(data_df)[0]
    # Capture prediciton and format for output
    out = predicted[0]
    wins = {'Winning team': str(out)}
    # Output prediction
    return jsonify(wins)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
