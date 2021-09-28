# Baseball Game Outcome Prediction API

## What is it

The Baseball Game Outcome Prediction API allows users to run a powerful machine learning prediction model with a simple request to an API. Using machine learning and historic Major League Baseball data results in an accuracy of 53%. Packaging this power into an API allows the user to make a request with the details of a game and recieve accurate results of the outcome.

## Main Features

Here are some details of the API

* Restful API
* Accepts post requests
* Outputs winning team prediction
* Utilizes Flask And Heroku
* Built with Python

## Where to access the API 

The Endpoint to access the prediction model API is available here:
[Game Prediction](https://baseball-game-predictor.herokuapp.com/)

## Interacting with the API

To interact with the API please send a post request to the endpoint url listed above.
The format of the post request should be a JSON object formatted and containing the values profiled below.

```
{
    'date': 20080612,
    'day_of_week': 'Thu',
    'visiting_team': 'MIN',
    'visiting_team_league': 'AL',
    'home_team': 'CLE',
    'home_team_league': 'AL',
    'day_night': 'N',
    'park_id': 126,
    'visiting_manager_name': 'Ron Gardenhire',
    'home_manager_name': 'Eric Wedge'
}
```

The return for this request will be a json string as shown below

```
{
    'Winning team': 'CLE'
}
```
