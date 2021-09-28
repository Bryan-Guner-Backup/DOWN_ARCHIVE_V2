from fastapi import APIRouter, HTTPException
import pandas as pd
import numpy as np
# from .update import backlog_path  # Use this when able to get the backlog.csv filled correctly
from ast import literal_eval
import os
import json
import ast
from fastapi_utils.tasks import repeat_every
import csv
import pandas as pd
import itertools
import math
import string
import re
import urllib3
import json
from bs4 import BeautifulSoup
import psycopg2
import collections
import os
from dotenv import load_dotenv

router = APIRouter()

@repeat_every(seconds=60)
async def updatedata():
    # Create dataframe using 2020PB source

    # Import and normalize the JSON file 
    df_2020pb = pd.read_json('https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations-v2.json')
    df_2020pb = pd.json_normalize(df_2020pb['data'])
    df_2020pb = df_2020pb.drop(columns=['edit_at'])
    df_2020pb = df_2020pb.rename(columns={'description':'desc', 'links':'src', 'name':'title'})
    df_2020pb['lat'] = ""
    df_2020pb['long'] = ""
    df_2020pb["desc"] = df_2020pb["desc"].replace("\\n", "  ")



    for i in range(len(df_2020pb)):
        df_2020pb["desc"][i] = str(df_2020pb["desc"][i]).replace("\n", " ")


    # upload, Extract and clean the data from the 846 API

    url="https://api.846policebrutality.com/api/incidents"
    http = urllib3.PoolManager()
    response = http.request('GET', url)
    soup = BeautifulSoup(response.data, "html.parser")

    json_846 = json.loads(soup.text)

    # Retrieve data from the json_846 'data' key
    incidents = json_846['data']

    # Create dataframe from the 846 API incident data
    df_846 = pd.DataFrame(incidents)

    # Replace single source in 2020PB dataset with multiple sources list from 846 API

    def mult_links(df_846, df_2020pb):
        for i in range(len(df_846)):
            for j in range(len(df_2020pb)):
                if df_846['pb_id'][i] == df_2020pb['id'][j]:
                    df_2020pb['src'][j] = df_846['links'][i]
                   

    mult_links(df_846, df_2020pb)

    # Populate lat and long information from geocoding dictionary in 846

    def populate_geocode(df_846, df_2020pb):
        for i in range(len(df_846)):
            for j in range(len(df_2020pb)):
                if df_846['pb_id'][i] == df_2020pb['id'][j]:
                    df_2020pb['lat'][j] = df_846['geocoding'][i]['lat']
                    df_2020pb['long'][j] = df_846['geocoding'][i]['long']
                    df_2020pb['geolocation'][j] = df_846['geocoding'][i]

    populate_geocode(df_846, df_2020pb)

    # Create csv from live data

    #df_2020pb.to_csv('latest_incidents.csv')

    # JSONify dataframe

    result = df_2020pb.to_json(orient="records")
    parsed = json.loads(result)
    json.dumps(parsed)

    #'officer_presence' to be applied to all
    #'verbal' exists but doesnt seem to fit
    empty_hand_control = ['arrest', 'shove','push','tackle','knee','grab','punch','throw','zip-tie', 'choke', 'headlock']
    blunt_impact = ['baton', 'rubber-bullet', 'bean-bag', 'beanbag', 'foam-bullet', 'wooden-bullet', 'marking-round']
    chemical = ['tear', 'pepper', 'spray', 'stun-grenade', 'mace', 'gas']
    conducted_energy_devices = ['taser', 'ced', 'taze', 'tase']
    lethal_force = ['live-round', 'death']
    undocumented = ['less-lethal', 'shoot','journalist','projectile', 'strike','beat', 'property-destruction', 'abuse-of-power','bystander','threaten','vehicle', 'bike','inhumane-treatment','medic', 'shield','hide-badge', 'kick', 'explosive','legal-observer', 'drive', 'person-with-disability', 'child', 'homeless', 'lrad', 'politician', 'body-cam', 'gun', 'horse', 'racial-profiling', 'lbgtq+', 'sexual-assault', 'incitement', 'dog', 'celebrity', 'conceal', 'non-protest']

    df_2020pb['force_cat'] = None

    # chemical = '|'.join(chemical)

    for ind in range(0, len(df_2020pb)):
        if df_2020pb['force_cat'][ind] == 'red':
            df_2020pb['force_cat'][ind] = 'chemical'
        for el in undocumented:
            if el in df_2020pb['tags'][ind]:
                df_2020pb['force_cat'][ind] = 'officer presence'
        for el in chemical:
            if el in df_2020pb['tags'][ind]:
                df_2020pb['force_cat'][ind] = 'chemical'
        for el in empty_hand_control:
            if el in df_2020pb['tags'][ind]:
                df_2020pb['force_cat'][ind] = 'empty hand control'
        for el in blunt_impact:
            if el in df_2020pb['tags'][ind]:
                df_2020pb['force_cat'][ind] = 'blunt impact'
        for el in conducted_energy_devices:
            if el in df_2020pb['tags'][ind]:
                df_2020pb['force_cat'][ind] = 'conducted energy device'
        for el in lethal_force:
            if el in df_2020pb['tags'][ind]:
                df_2020pb['force_cat'][ind] = 'lethal force'

    # # Move into database
    df_2020pb.reset_index(inplace=True)
    df_2020pb = df_2020pb.rename(columns={'index':'ind'})

    file_p = "updated_cached.csv"
    table_n = "latest_2020PB"
    cols_t = ('ind','src', 'state', 'city', 'description', 'tags', 'geolocation', 'title', 'date', 'date_text', 'id', 'lat', 'long', 'forcecat')

    df_2020pb = df_2020pb.rename(columns={"force_cat" : "forcecat", "desc": "description"})
    df_2020pb.set_index("ind", inplace = True)

    df_2020pb['src'] = df_2020pb['src'].astype(str).str.replace('|', '', regex=True)
    df_2020pb = df_2020pb.append({'src': 'afdsf', 'state': "CA", 'city' : "fsafdsd", 'description' : "sdfs", 'tags' : "sdfsd", 'geolocation': 'sdf', 'title': "asd", 'date': 10-24, 'date_text' : "sdf", 'id' : "sdf", 'lat': 231, 'long' : 231, 'forcecat': "sdf"}, ignore_index=True)
    csv_df = df_2020pb.to_csv("updated_cached.csv", sep= '|')


    def copy_query(c, file_path, table_name, cols_tuple):

        schema_table = table_name
        with open(file_path, 'r', encoding="utf-8") as f:
            next(f)
            c.copy_from(f, schema_table, sep='|', null='null', columns=cols_tuple)

    load_dotenv()
    user = os.getenv('user')
    password = os.getenv('password')
    port = os.getenv('port')
    database = os.getenv('database')
    host = os.getenv('host')

    try:
        #function for establishing connection
        connection = psycopg2.connect(user= user,
                                            password= password, 
                                            host= host,
                                            port = port,  
                                            database = database)
        cursor = connection.cursor()
        #print POSTGRES Conn properties
        print(connection.get_dsn_parameters(), "\n")

    except Exception as ex:
            print("connection error: ")
            print (ex)

    cursor.execute("""
    DROP TABLE latest_2020PB
    """)
    connection.commit()

    cursor.execute("""CREATE TABLE latest_2020PB(
        ind SERIAL PRIMARY KEY,
        src text,
        state text,
        city text,
        description text,
        tags text,
        geolocation text,
        title text,
        date text,
        date_text text,
        id text,
        lat float,
        long float,
        forcecat text)""")

    connection.commit()

    try:
        #INSERTING
        copy_query(cursor, file_p, table_n, cols_t)
        #INSERTING END

        #COMMIT
        connection.commit()
        #COMMITING END
    except (Exception, psycopg2.Error) as error:
        print("error while connecting to postgreSQL", error)

    sql="""
    SELECT *
    FROM latest_2020PB
    ORDER BY ind
    """
    master_table = pd.read_sql(sql, index = 'ind', con=connection))
    master_table = pd.to_json