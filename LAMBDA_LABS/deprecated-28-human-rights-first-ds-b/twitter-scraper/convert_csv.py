import tweepy
import dataset
from textblob import TextBlob
from datafreeze.app import freeze
import normality

db = dataset.connect("sqlite:///tweets.db")

result = db["tweets"].all()
freeze(result, format='csv', filename='tweets.csv')