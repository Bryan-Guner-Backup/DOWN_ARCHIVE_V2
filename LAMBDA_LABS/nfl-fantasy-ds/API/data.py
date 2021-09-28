"""
Reads in data from csv into pandas dataframes
"""


import pandas as pd
import glob


# read all csv data into a python dictionary

preds = {}

for filename in glob.glob('./data/combined-predictions/*.csv'):
    if "predictions" in filename:
        preds[filename[28:-4]] = pd.read_csv(filename,
                                            header=0,
                                            index_col='player',
                                            names=['player', 'first', 'last', 'name', 'position', 'weekCur',
                                                   'weekPred', 'weekAct', 'weekDiff', 'weekPct', 'rankCur',
                                                   'rankPred', 'rankAct'])
