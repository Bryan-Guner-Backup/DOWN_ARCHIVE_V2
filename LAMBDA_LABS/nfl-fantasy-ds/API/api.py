"""
Data science API application that analyzes and gives scores for 
nfl fantasy football player trades.
"""


from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from .check_score import *
from .errors import InvalidUsage
from .data import *


load_dotenv()
def create_app():
    app = Flask(__name__)
    CORS(app)

    @app.route("/")
    def root():
        """
        Root page, you should not land here.
        """
        return render_template('home.html')

    @app.route("/api/trade/", methods=['GET'])
    def analyze_trade():
        """
        API main route, takes in player IDs and returns predictions
        """
        player0_id = request.args.get('player0_id')
        player1_id = request.args.get('player1_id')
        week = request.args.get('week')
        
        df = preds.get('predictions-week{}'.format(week))
        request_args = [player0_id, player1_id]
        results = df[df.index.isin(request_args)]
        results = check_and_add(results)
        json = results.to_json(orient='table')
        
        return json

    @app.errorhandler(404)
    def page_not_found(error):
        return 'This page does not exist', 404

    @app.errorhandler(InvalidUsage)
    def handle_invalid_usage(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response

    return app

if __name__ == "__main__":
    """
    Bind to PORT if defined, otherwise default to 5000.
    """
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
