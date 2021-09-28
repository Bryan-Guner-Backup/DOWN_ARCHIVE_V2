# Human Rights First Police Use of Force Map

You can find the deployed project at [HRF Use of Force](https://main.d2njpi9j1s76mb.amplifyapp.com/).

[video presentation] (https://youtu.be/4Rk8fbLA0s0)

## Contributors


|                                                      [Zach Luck](https://github.com/zacharyluck)                                                       |                                                       
                                                    [Chris Hartig](https://github.com/ChrisHartig44)                                                        |                                                                                                         |
## Project Overview

[Trello Board](https://trello.com/b/QD7rXL7v/labs25hrfthierry)

[Product Canvas](https://whimsical.com/47hccoy2w65yxpK8dSfpwz)


Our team is developing an interactive map that identifies potential instances of police use of force across the United States of America for Human Rights First, an independent advocacy and action organization. The death of George Floyd has sparked a worldwide conversation about police use-of-force in the United States of America. Police brutality is a threat to the safety of a population and Human Rights First is invested in identifying potential instances of improper use-of-force from law enforcement.


 We're pulling data from similiar APIs(All locations V2 - https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations-v2.json, 846- https://api.846policebrutality.com/api/incidents) and from Twitter and Reddit. We want to identify aggregate these instances. 

### Key Features

- Random Forest/ NLP Model
- Location Filtering (USA only)
- Automatic updating



### Data Science API built using:

#### _Data Science goes here_

Why did you choose this framework?

- Works well with FastAPI
- Recommended to us
- Wanted to learn an in-demand framework

🚫List the rest of the data science features and libraries in the same format as the framework above.
- Pandas
- scikit-learn
- spacy
- nltk
- PRAW
- Tweepy

#### Data Science API deployed to AWS

#### [Back end](https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamB-BE)



# APIs

## 2Data Science API 

We are sending json objects to the backend with information about instances of police use of force. This information includes location data (city, state, and geocode) and relevant details about the incident, like the type of force that was used.

## PRAW

PRAW, The Python Reddit API Wrapper, makes it easy for users to analyze Reddit data. We used PRAW to scrape Reddit for potential instances of police of force.
 


# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    
    *  PRAW_CLIENT_ID  - keys for Reddit API
    *  PRAW_CLIENT_SECRET - keys for Reddit API
    *  PRAW_USER_AGENT - keys for Reddit API
    *  TWEEPY_CONSUMER - keys for Twitter API
    *  TWEEPY_SECRET - keys for Twitter API
    *  TWEEPY_ACCESS - keys for Twitter API
    *  TWEEPY_ACCESS_SECRET - keys for Twitter API


### Feature Requests

Possible next steps include improving the Reddit model to weed out the pesky false positives that persist, integrating data from Twitter data, and possibly find a more efficient way to scrape Reddit. Right now we’re looking at the top stories of the week on r/news every 24 hours. We’re probably missing a lot of stories only looking at one subreddit, but the more subreddits we look at the more duplicative information we’ll have.


## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamB-BE/blob/main/README.md) for details on the backend of our project.
