import pandas as pd
import numpy as np
from joblib import load


model=load('app/assets/model.pkl')

"""
FEATURES USED FOR TRAINING:
['household_type', 'length_of_stay', 'case_members', 'race', 'gender',
       'income', 'ethnicity', 'HIV_AIDs', 'drug_abuse', 'alcohol_abuse',
       'mental_illness', 'chronic_health_issues', 'physical_disabilities',
       'developmental_disabilities', 'enrolled_status']

The notebook used for training the model is located in this repo: notebooks/Model.ipynb
"""

#----- UTIL FUNTIONS FOR PREPROCESSING MEMBERS DATA
def start_pipeline(df):
    '''Creates a copy of original dataframe to use in pipeline'''
    return df.copy()

def unpack_json_cols(df):
  '''Unpack json columns into a dataframe and concatenate each resulting dataframe to the original dataframe.'''  
  demographics = pd.json_normalize(df['demographics'])
  barriers = pd.json_normalize(df['barriers'])
  schools = pd.json_normalize(df['schools'])
  df = pd.concat([df, demographics, barriers, schools], axis=1)
  return df

def delete_cols(df):
  '''Deletes original json columns as well as columns that will not be used in training the model (because of leakage)'''
  json_cols = ['barriers', 'demographics', 'schools']
  not_used = ['id', 'predicted_exit_destination', 'exit_destination', 'family_id', 'date_of_exit', 
              'income_at_exit', 'date_of_enrollment', 'relationship']
  df.drop(columns=[*json_cols, *not_used], inplace=True)
  return df

def barriers(df):
  '''Assigns a value of True if the person has the barrier, else False'''
  has_barrier = ['Alcohol Abuse', 'Developmental Disability', 'Chronic Health', 'Drug Abuse', 'HIV/AIDS', 'Mental Illness', 'Physical Disability']
  barrier_cols = ['HIV_AIDs',	'drug_abuse',	'alcohol_abuse',	'mental_illness',	'chronic_health_issues', 
                    'physical_disabilities',	'developmental_disabilities']
  for barrier in barrier_cols:
    df[barrier] = df[barrier].apply(lambda x: True if x in has_barrier else False)
  return df

def replace_values(df):
  '''
  Replace missing and unknown values in data to NaN.
  Currently, missing values in the database are denoted as either -1.0 or "" (an empty string)
  '''
  replace_list = [-1.0, ""]
  df.replace(replace_list, np.NaN, inplace=True)
  return df


#------- PREDICTION FUNCTION
def predictor(df):
    df_clean = (df
        .pipe(start_pipeline)
        .pipe(unpack_json_cols)
        .pipe(delete_cols)
        .pipe(barriers)
        .pipe(replace_values)
    )
    prediction = model.predict(df_clean)[0]
    return prediction

