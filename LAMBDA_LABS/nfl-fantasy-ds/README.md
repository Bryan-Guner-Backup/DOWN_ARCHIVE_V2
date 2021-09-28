
# NFL Fantasy Perfect Trade

You can find the project at [https://nfl-perfect-trader.herokuapp.com](https://nfl-perfect-trader.herokuapp.com/api/trade/?player0_id=23&player1_id=49&week=1).

## Contributors

|                                       [Jim King](https://github.com/JimKing100)                                        |                                       [Enkhzorig Batsaikhan](https://github.com/ezorigo)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | 
|                      [<img src="https://github.com/Lambda-School-Labs/nfl-fantasy-ds/blob/master/images/Jim%20King-PacUnion-Color-Web.jpg" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JimKing100)             |  
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jimkinghomes/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |


![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/cdd3afdf63c179c84278/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/nfl-fantasy-ds/maintainability)

## Project Overview


[Trello Board](https://trello.com/b/GR22EAEc/nfl-fantasy-perfect-trade)

[Product Canvas](https://www.notion.so/NFL-Fantasy-Perfect-Trade-881bd44def114fda8cffd8ccc362caf0)

NFL Fantasy Perfect Trade

An application to help fantasy football fans analyze potential player trades, make the optimal trades and win their fantasy football league competitions.

[www.tacklemytrade.com](http://www.tacklemytrade.com)

### Tech Stack

Python, pandas, numpy, statsmodel, sklearn, pmdarima, xgboost, flask

### Predictions

Multiple models are employed to predict fantasy football points for each player, each week during the 2019 NFL season.

For NFL defenses an ARIMA model is used as there are 18-20 seasons of weekly game data (288 - 320 data points in a time series).

For rookie players, there are no pro data points, so for week 1 of the 2019 season an XGBoost model is used using background data for the player including combine data (e.g. 40 yard dash, bench press, etc.), biometric data (height and weight), college data (college and division), and draft position.  After week 1, rookie predictions are based on a simple average of actual points.

For non-rookie players, an ARIMA model was initially used for players with 4+ years of data (49+ data points in a time series).  Since an ARIMA model does not work well with fewer than 50 data points, an average of actual points is used for non-rookie players with 3 or fewer seasons of data.

Ultimately a Recurrent Neural Network (RNN), LSTM model was used for the non-rookie players with 4+ years of data as it significantly outperformed the ARIMA model.

### Data Sources

All the raw data was acquired from ArmchairAnalysis.com

[ArmchairAnalysis.com](https://www.armchairanalysis.com)

### Python Notebooks

See the repo directory [notebooks](https://github.com/Lambda-School-Labs/nfl-fantasy-ds/tree/master/notebooks) for the Python Notebooks.

### How to connect to the data API

You can find the data API at [https://nfl-perfect-trader.herokuapp.com](https://nfl-perfect-trader.herokuapp.com/api/trade/?player0_id=23&player1_id=49&week=1).

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](https://github.com/Lambda-School-Labs/nfl-fantasy-ds/blob/master/code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](_link to your backend readme here_) for details on the backend of our project.

See [Front End Documentation](_link to your front end readme here_) for details on the front end of our project.

