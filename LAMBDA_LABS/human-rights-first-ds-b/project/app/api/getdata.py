from fastapi import APIRouter, HTTPException
import pandas as pd
import numpy as np
import praw
from bs4 import BeautifulSoup
import re
import pickle
from newspaper import Article
# from .update import backlog_path  # Use this when able to get the backlog.csv filled correctly
from ast import literal_eval
import os
import json
import ast
import csv
import spacy
from collections import Counter
from datetime import datetime
from dotenv import load_dotenv
from sklearn.pipeline import Pipeline
import boto3
s3 = boto3.resource('s3')
for bucket in s3.buckets.all():
    print(bucket.name)
bucket = s3.Bucket('hrf-team-a')
print(bucket)

with open('filename2', 'wb') as data:
    bucket.download_fileobj('Compiled_Police_Reports.csv', data)
router = APIRouter()

@router.get('/getdata')
async def getdata():
    '''
    Get jsonified dataset from all_sources_geoed.csv
    '''

    # Path to dataset used in our endpoint
    locs_path = os.path.join(os.path.dirname(
        __file__), '..', '..', 'all_sources_geoed.csv')

    router = APIRouter()

    df = pd.read_csv(locs_path)
    # Fix issue where "Unnamed: 0" created when reading in the dataframe
    df = df.drop(columns="Unnamed: 0")

    # Removes the string type output from columns src and tags, leaving them as arrays for easier use by backend
    for i in range(len(df)):
        df['src'][i] = ast.literal_eval(df['src'][i])
        df['tags'][i] = ast.literal_eval(df['tags'][i])


    """
    Convert data to useable json format
    ### Response
    dateframe: JSON object
    """
    # Initial conversion to json - use records to jsonify by instances (rows)
    result = df.to_json(orient="records")
    # Parse the jsonified data removing instances of '\"' making it difficult for backend to collect the data
    parsed = json.loads(result.replace('\"', '"'))
    return parsed


@router.get('/update')
async def update():
    '''
    Update backlog database with data from reddit.
    '''

    # globalize these variables because I need to
    PRAW_CLIENT_ID = os.getenv('PRAW_CLIENT_ID')
    PRAW_CLIENT_SECRET = os.getenv('PRAW_CLIENT_SECRET')
    PRAW_USER_AGENT =  os.getenv('PRAW_USER_AGENT')

    reddit = praw.Reddit(
        client_id=PRAW_CLIENT_ID,
        client_secret=PRAW_CLIENT_SECRET,
        user_agent=PRAW_USER_AGENT
    )
    # Grab data from reddit
    data = []
    # Pull from reddit using the format: reddit.subreddit(<subreddit name>).<sort posts by keyword>(limit=<number of posts that you want to pull>)
    for submission in reddit.subreddit("policebrutality").top(limit=None):
        data.append([submission.id, submission.title, submission.url])  # Append the post's id, title, and url to a list within the data list
    # construct a dataframe with the data
    col_names = ['id', 'title', 'url']
    df = pd.DataFrame(data, columns=col_names)
    
    # for i in range(len(df)):
    #     df['src'][i] = ast.literal_eval(df['src'][i])
    #     df['tags'][i] = ast.literal_eval(df['tags'][i])

    # Initial conversion to json - use records to jsonify by instances (rows)
    result = df.to_json(orient="records")
    # Parse the jsonified data removing instances of '\"' making it difficult for backend to collect the data
    parsed = json.loads(result.replace('\"', '"'))
    return parsed

@router.get('/UpdatedJSONData')
async def Read_Json():
    '''
    Reads jsonified dataset
    for backend use
    '''
    # Path to dataset used in our endpoint
    locs_path = os.path.join(os.path.dirname(
        __file__), '..', '..', 'backlog.csv')

    router = APIRouter()

    df = pd.read_csv(locs_path)
    # Fix issue where "Unnamed: 0" created when reading in the dataframe
    # df = df.drop(columns="Unnamed: 0")

    # Removes the string type output from columns src and tags, leaving them as arrays for easier use by backend
    for i in range(len(df)):
        df['src'][i] = ast.literal_eval(df['src'][i])
        # df['tags'][i] = ast.literal_eval(df['tags'][i])


    """
    Convert data to useable json format
    ### Response
    dateframe: JSON object
    """
    # Initial conversion to json - use records to jsonify by instances (rows)
    result = df.to_json(orient="records")
    # Parse the jsonified data removing instances of '\"' making it difficult for backend to collect the data
    parsed = json.loads(result.replace('\"', '"'))
    return parsed


@router.get('/ReadCSV')
async def test():
    """
    Reading CSV 
    Return JSON OBject
    """
    # # Reading downloaded s3 file 
    df = open(r"/Users/terrenceam22/Documents/Labs/human-rights-first-ds-a/project/app/api/filename.csv", "r")
    df = pd.DataFrame(df)
    
   
    # df = df.drop(columns="Unnamed: 0")

    parsed = df.to_json(orient="records")
    return parsed
    
    
    # # Parsing Data
    # parsed = json.load(df)
    # print(parsed)
    # return parsed
    # file = open(r"/Users/terrenceam22/Documents/Labs/human-rights-first-ds-a/project/app/api/filename.csv", "r")
    # reader = csv.DictReader(file)
    # df = pd.read_csv(file)
    # reader = list(reader)[0]
    # json_from_csv = json.dumps((list(reader)))
    # print(json_from_csv)
    # return json_from_csv

# result = df.to_json(r'C:\Users\Ron\Desktop\Test\New_Products.json')
# parsed = json.load(result)
# print(parsed)

    







    
    
#     # pipeline = Pipeline()

#     # # pull the text from each article itself using newspaper3k
#     # content_list = []
#     # date_list = []
#     # # go through each URL and use newspaper3k to extract data
#     # for id_url in df['url']:
#     #     # use newspaper3k to extract text
#     #     article = Article(id_url)
#     #     article.download()
#     #     # if the article doesn't download, the error is thrown in parse()
#     #     try:
#     #         article.parse()
#     #     except:
#     #         # add null values to show no connection
#     #         content_list.append(None)
#     #         date_list.append(None)
#     #         continue
#     #     content_list.append(article.text)
#     #     # this will be null if newspaper3k can't find it
#     #     date_list.append(article.publish_date)
#     # df['text'] = content_list
#     # df['date'] = date_list

#     # # use NLP model to filter posts
#     # df['is_police_brutality'] = pipeline.predict(df['title'])
#     # df = df[df['is_police_brutality'] == 1]
#     # df = df.drop(columns='is_police_brutality')

#     # # use spaCy to extract location tokens
#     # tokens_list = []
#     # for text in df['text']:
#     #     doc = nlp(text.lower())
#     #     ents = [e.text for e in doc.ents if e.label_ == 'GPE']
#     #     tokens_list.append(ents)
#     # df['tokens'] = tokens_list

#     # # figure out which city and state the article takes place in
#     # city_list = []
#     # state_list = []
#     # lat_list = []
#     # long_list = []
#     # for tokens in df['tokens']:
#     #     # set up Counter
#     #     c = Counter(tokens)

#     #     # count which states come back the most, if any
#     #     state_counts = {}
#     #     for state in states_map:
#     #         if c[state] > 0:
#     #             state_counts[state] = c[state]

#     #     # get state(s) that came back the most as dict with lists
#     #     max_count = 0
#     #     max_state = None

#     #     for state in state_counts:
#     #         if state_counts[state] > max_count:
#     #             max_count = state_counts[state]
#     #             max_state = {state: {}}
#     #         elif state_counts[state] == max_count:
#     #             max_state[state] = {}

#     #     # if no state is found
#     #     if max_state is None:
#     #         city_list.append(None)
#     #         state_list.append(None)
#     #         lat_list.append(None)
#     #         long_list.append(None)
#     #         continue

#     #     max_city = None
#     #     # get any cities in tokens based on states
#     #     for state in max_state:  # ideally this should only run once
#     #         city_counts = {}
#     #         for city in states_map[state]:
#     #             if c[city] > 0:
#     #                 city_counts[city] = c[city]
#     #         max_state[state] = city_counts

#     #         # get the city/state combo that came back the most
#     #         max_count = 0
#     #         for city in city_counts:
#     #             if city_counts[city] > max_count:
#     #                 max_count = city_counts[city]
#     #                 max_city = (city, state)

#     #     # if no city is found
#     #     if max_city is None:
#     #         city_list.append(None)
#     #         state_list.append(None)
#     #         lat_list.append(None)
#     #         long_list.append(None)
#     #         continue

#     #     # the city and state should be known now

#     #     city_list.append(max_city[0].title())
#     #     state_list.append(max_city[1].title())
#     #     # now get the geolocation data
#     #     row = locs_df[(
#     #         (locs_df['city_ascii'] == max_city[0]) &
#     #         (locs_df['admin_name'] == max_city[1])
#     #     )]
#     #     row = row.reset_index()
#     #     if row.empty:
#     #         pass
#     #     else:
#     #         lat_list.append(row['lat'][0])
#     #         long_list.append(row['lng'][0])

#     # # loop ends, add cities and states onto dataframe
#     # df['city'] = city_list
#     # df['state'] = state_list
#     # df['lat'] = lat_list
#     # df['long'] = long_list

#     # # drop any columns with null entries for location
#     # df = df.dropna()
#     # df = df.reset_index()
#     # df = df.drop(columns='index')

#     # # cleanup to match 846 api
#     # def listify(text):
#     #     return [text]
#     # df['src'] = df['url'].apply(listify)
#     # df['desc'] = df['text']
#     # df = df.drop(columns=['tokens', 'text'])
#     # df = df[[
#     #     'id', 'state', 'city',
#     #     'date', 'title', 'desc',
#     #     'src', 'lat', 'long'
#     # ]]
     
#     # for i in range(len(df)):
#     #     df['src'][i] = ast.literal_eval(df['src'][i])
#     #     df['tags'][i] = ast.literal_eval(df['tags'][i])

#     # # save the file to a local csv
#     # df.to_csv(backlog_path, index=False, )
#     # return HTTPException(
#     #     200,
#     #     "Backlog Updated at %s with %s entries" % (datetime.now(), df.shape[0]))
    
    
    
    

    