# Prediction Leaderboard

### Concept:
The main idea behind the Leaderboard is to allow users to compete with one another and our model. Essentially, for a given time period, we want to rank-order the predictive accuracy of our users and our model. Because the baseball season is already over at the time of this writing however, we will simply document our approach to building this and let the next team take a stab at implementing it.

### Implementation: 
Our application's back-end is built using `Node.js` and so it'll be easiest to design our Leaderboard accordingly. Using the existing structure, we would have to expand our Firebase database to:
1) Include a field for *User Predictions* (for each game in a season, a user can submit a prediction or abstain)
2) Include a field for *Model Predictions* (same as above but for our model's predictions)
2) Include *Game Outcomes* (so as the season progresses each game's outcome is logged and stored)
3) Compare the Outcomes and Predictions together to calculate Accuracy for each user and our model.


### Measuring Accuracy:
A naive approach to measure predictive accuracy would be to rely on the ratio of correct predictions out of total predictions, per user. However, one can see how this might run into an inbalance problem. Let's say User A, and User B both have 73% accuracy. But user B has made 12 more predictions than User A. Can they really be said to have the same ability to predict game outcomes? Or, in a more advanced version of our application, where each game has a breakdown of odds, shouldn't the user who correctly predicts the underdog rank higher than the user that correctly predicts the favorite? Sports betting would side with the former over the latter. 

To remedy this, we're going to use what Data Science to assess classification models with imbalanced classes:


|                | Predicted: Team 1 | Predicted: Team 2 |   |   |
|----------------|-------------------|-------------------|---|---|
| Actual: Team 1 | True Positive     | False Negative    |   |   |
| Actual: Team 2 | False Positive    | True Negative     |   |   |
|                |                   |                   |   |   |

The above is a Confusion Matrix that shows the 4 possible outcomes of any given game prediction. Combining them, we can generate what is known as [an F1 score](https://en.wikipedia.org/wiki/F1_score): 

#### Precision:
`Precision = True Positive / True Positive + False Positive`

#### Recall:
`Recall = True Positive / True Positive + False Negative`
 
 Combining the 2, we can generate the F1 Score:
 #### F1:
 `F1 = 2 * (precision * recall / precision + recall)`
 Intuitevely, this measure is the harmonic mean of recall and precision. 
 
 
 ### Ranking Equivalent F1 Scores:
 However unlikely, it's possible that 2 users might have the same score. If that is the case, we would probably then add a second element: number of predictions. The reasoning here would be simply to give a slight advantage to users who have made more predictions as it reflects a slightly higher risk. All other things being equal, we feel this would be a good tie-breaker. 
 
 
 ### Ideas for Future Development
 There are any number of directions that this project can be evolved along. Below are a few of our favorites.

#### Odds-based predictions
Major sports gambling services like [Covers](https://www.covers.com/sports/mlb/matchups) publish their "odds" for any particular match up. Using this data, we could measure predictions even more accurately by accounting for predictions that are non-consensus but right. 

#### PredictIt Shares
[Predictit](https://www.predictit.org/) is a fascinating example of a prediction market. Users can create markets for a variety of political scenarios and then trade shares on the outcome. One can imagine how this functionality could be transplanted to the sports world where gambling has always formed a part, for better or worse. 

#### Numerai for Sports 
[Numerai](https://numer.ai/) is a crowd-sourced hedge fund that lets anyone build a predictive model and rewards them based on its performance in the real market. Models are aggregated together and they direct the funds investments. Profits are then distributed according to individual model performance. The same principles could be applied to the world of sports betting. 

```

```
