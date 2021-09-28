# -*- coding: utf-8 -*-
"""
Created on Wed Oct 28 17:37:16 2020

@author: Ronin
"""
import pandas as pd
import numpy as np
from ast import literal_eval
from pydantic import BaseModel, Field, validator
import os
import json
import ast
import praw
import requests
from bs4 import BeautifulSoup
import re
import pickle
from newspaper import Article
import spacy
from collections import Counter
from datetime import datetime
#from dotenv import load_dotenv
import en_core_web_sm

nlp = en_core_web_sm.load()

# Sets all text to lowercase to avoid any case differences
def lowerify(text):
    # fix up geolocation dataframe a little
    return text.lower()

# geolocation dataset; useful for creating location and geolocation data
locs_path = os.path.join(os.path.dirname(
    __file__), '..', '..', 'cities_states.csv')
locs_df = pd.read_csv(locs_path)

# Drop Unnamed: 0 column and 'country' column
locs_df = locs_df.drop(columns=['Unnamed: 0', 'country'])
# Apply lowerify function to all city names
locs_df['city_ascii'] = locs_df['city_ascii'].apply(lowerify)
# Apply lowerify function to all state names
locs_df['admin_name'] = locs_df['admin_name'].apply(lowerify)

# Create state/city mapper
states_map = {}
# for each state, map their respective cities
for state in list(locs_df.admin_name.unique()):
    states_map[state] = locs_df[locs_df['admin_name']
                                == state]['city_ascii'].to_list()

# police brutality indentifying nlp
model_path = os.path.join(os.path.dirname(
    __file__), '..', '..', 'hrfc_rfmodel_v1.pkl')
model_file = open(model_path, 'rb')
pipeline = pickle.load(model_file)
model_file.close()
# local csv backlog path used to save the newly pulled in data
backlog_path = os.path.join(os.path.dirname(
        __file__), '..', '..', 'backlog.csv')

# spacy nlp model

nlp = en_core_web_sm.load()

force_type_tags = ['tear-gas-canister', 'bean-bag', 'baton', 'tackle', 'lrad',
                   'kick', 'throw', 'choke', 'push', 'wooden-bullet', 'strike'
                   , 'pepper-ball', 'sexual-assault', 'gas', 'live-round', 
                   'incitement', 'marking-round', 'knee-on-neck', 'projectile'
                   , 'gun', 'arrest', 'shield', 'stun-grenade', 'tase', 'mace'
                   , 'foam-bullet', 'knee', 'taser', 'death', 'pepper-spray', 
                   'threaten', 'grab', 'less-lethal', 'punch', 'rubber-bullet'
                   , 'shove', 'beat', 'explosive', 'zip-tie', 'shoot', 
                   'inhumane-treatment', 'tear-gas', 'spray', 'headlock', 
                   'abuse-of-power']

updateDF = None
def Update_data():
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
    for submission in reddit.subreddit("news").hot(limit=100):
        data.append([submission.id, submission.title, submission.url])  # Append the post's id, title, and url to a list within the data list
    # construct a dataframe with the data
    col_names = ['id', 'title', 'url']
    df = pd.DataFrame(data, columns=col_names)

    # pull the text from each article itself using newspaper3k
    content_list = []
    date_list = []
    # go through each URL and use newspaper3k to extract data
    for id_url in df['url']:
        # use newspaper3k to extract text
        article = Article(id_url)
        article.download()
        # if the article doesn't download, the error is thrown in parse()
        try:
            article.parse()
        except:
            # add null values to show no connection
            content_list.append(None)
            date_list.append(None)
            continue
        content_list.append(article.text)
        # this will be null if newspaper3k can't find it
        date_list.append(article.publish_date)
    df['text'] = content_list
    df['date'] = date_list

    # use NLP model to filter posts
    df['is_police_brutality'] = pipeline.predict(df['title'])
    df = df[df['is_police_brutality'] == 1]
    df = df.drop(columns='is_police_brutality')

    # use spaCy to extract location tokens
    tokens_list = []
    for text in df['text']:
        doc = nlp(text.lower())
        ents = [e.text for e in doc.ents if e.label_ == 'GPE']
        tokens_list.append(ents)
    df['tokens'] = tokens_list

    # figure out which city and state the article takes place in
    city_list = []
    state_list = []
    lat_list = []
    long_list = []
    tag_list = []
    for tokens in df['tokens']:
        # set up Counter
        c = Counter(tokens)

        # count which states come back the most, if any
        state_counts = {}
        for state in states_map:
            if c[state] > 0:
                state_counts[state] = c[state]

        # get state(s) that came back the most as dict with lists
        max_count = 0
        max_state = None

        for state in state_counts:
            if state_counts[state] > max_count:
                max_count = state_counts[state]
                max_state = {state: {}}
            elif state_counts[state] == max_count:
                max_state[state] = {}

        # if no state is found
        if max_state is None:
            city_list.append(None)
            state_list.append(None)
            lat_list.append(None)
            long_list.append(None)
            continue

        max_city = None
        # get any cities in tokens based on states
        for state in max_state:  # ideally this should only run once
            city_counts = {}
            for city in states_map[state]:
                if c[city] > 0:
                    city_counts[city] = c[city]
            max_state[state] = city_counts

            # get the city/state combo that came back the most
            max_count = 0
            for city in city_counts:
                if city_counts[city] > max_count:
                    max_count = city_counts[city]
                    max_city = (city, state)

        # if no city is found
        if max_city is None:
            city_list.append(None)
            state_list.append(None)
            lat_list.append(None)
            long_list.append(None)
            continue

        # the city and state should be known now

        city_list.append(max_city[0].title())
        state_list.append(max_city[1].title())
        # now get the geolocation data
        row = locs_df[(
            (locs_df['city_ascii'] == max_city[0]) &
            (locs_df['admin_name'] == max_city[1])
        )]
        row = row.reset_index()
        if row.empty:
            pass
        else:
            lat_list.append(row['lat'][0])
            long_list.append(row['lng'][0])
        
        
        #try to grab tags for the type of force
        
        for x in force_type_tags:
            count = 0
            if c[x] > 0:
                tag_list.append(x)
                count += 1
            
        if count == 0:
            tag_list.append("Missing")
            
    
    # loop ends, add cities and states onto dataframe
    df['city'] = city_list
    df['state'] = state_list
    df['lat'] = lat_list
    df['long'] = long_list
    df['tags'] = tag_list
    # drop any columns with null entries for location
    df = df.dropna()
    df = df.reset_index()
    df = df.drop(columns='index')

    # cleanup to match 846 api
    def listify(text):
        return [text]
    df['src'] = df['url'].apply(listify)
    df['desc'] = df['text']
    df = df.drop(columns=['tokens', 'text'])
    df = df[[
        'src','state','city','desc','tags','title','date','id','lat','long'
    ]]

    # save the file to a local csv
    updateDF = df
    


def Data_grab():
    """
    Formats data saved in csv and checks for df of updated data

    Returns
    -------
    Json version of saved database.

    """
    locs_path = os.path.join(os.path.dirname(
        __file__), '..', '..', 'all_sources_geoed.csv')
    
    df = pd.read_csv(locs_path)
    #add updated reddit data if update is used
    if updateDF is not None:
        df = df.concat([df,updateDF],sort= True)
        
    # Fix issue where "Unnamed: 0" created when reading in the dataframe
    df = df.drop(columns="Unnamed: 0")
    
    # Removes the string type output from columns src and tags, leaving them 
    # as arrays for easier use by backend
    
    for i in range(len(df)):
        df['src'][i] = ast.literal_eval(df['src'][i])
        df['tags'][i] = ast.literal_eval(df['tags'][i])
        
    # Initial conversion to json - use records to jsonify by instances (rows)
    result = df.to_json(orient="records")
    # Parse the jsonified data removing instances of '\"' making it difficult 
    # for backend to collect the data
    parsed = json.loads(result.replace('\"', '"'))
    return parsed