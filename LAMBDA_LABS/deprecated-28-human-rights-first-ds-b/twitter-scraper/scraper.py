import dataset
import json
import csv
import tweepy
from sqlalchemy.exc import ProgrammingError

db = dataset.connect("sqlite:///tweets.db")

#insert your credentials here
CONSUMER_KEY = 'XXXX'
CONSUMER_SECRET = 'XXXX'
ACCESS_KEY = 'XXXX'
ACCESS_SECRET = 'XXXX'

class StreamListener(tweepy.StreamListener):
    def on_status(self, status):
        if not 'RT @' in status.text:
            description = status.user.description
            loc = status.user.location
            text = status.text
            coords = status.coordinates
            geo = status.geo
            name = status.user.screen_name
            user_created = status.user.created_at
            id_str = status.id_str
            created = status.created_at
            source = status.user.url
            language = status.lang

            if geo is not None:
                geo = json.dumps(geo)

            if coords is not None:
                coords = json.dumps(coords)

            table = db["tweets"]
            try:
                table.insert(dict(
                    user_description=description,
                    user_location=loc,
                    coordinates=coords,
                    text=text,
                    geo=geo,
                    user_name=name,
                    user_created=user_created,
                    id_str=id_str,
                    created=created,
                    source = source,
                    language = language,
                    ))
            except ProgrammingError as err:
                print(err)

    def on_error(self, status_code):
        if status_code == 420:
            #return False in on_data disconnects the stream
            return False

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

stream_listener = StreamListener()
stream = tweepy.Stream(auth=api.auth, listener=stream_listener)
stream.filter(track=["police"])