from collections import OrderedDict
from typing import List

from fastapi import APIRouter, HTTPException

from app.database import fetch_query_records
from app import schemas

router = APIRouter()

@router.get('/{city_id}')
async def city(city_id: int):
    """
    Returns database entries if given valid city_id 📈
    
    ### Path Parameter
    `city_id`:  int
    Lookup city id can be found [here](https://github.com/Lambda-School-Labs/Labs27-C-Citrics-DS/blob/data/add_citydata.csv/notebooks/citydata.csv) or [here for raw .csv](https://raw.githubusercontent.com/Lambda-School-Labs/Labs27-C-Citrics-DS/data/add_citydata.csv/notebooks/citydata.csv)

    ### Response
    JSON string containing 
    - **city**: [str] . . . standard format city name
    - **state**: [str] ... standard format state name
    - **pop**: [int] . . . population estimate
    - **age**: [float] . . . average age of residents
    - **household**: [int] . . . median household income
    - **individual**: [int] . . . median individual income
    - **house**: [int] . . . median home/condo price
    - **coli**: [float] . . . Cost of Living Index [ACCRA Cost of Living Index](https://en.wikipedia.org/wiki/ACCRA_Cost_of_Living_Index)
    """

    # Validate the city_id
    if city_id not in range(1278): 
        raise HTTPException(status_code=404, detail=f'City id {city_id} not found')

    # if city_id valid, establish sql query statement
    query = '''SELECT *
                FROM
                    citydata
                WHERE
                    city_id = (%s);
    '''
    params = (city_id,)
    df = fetch_query_records(query, params)
    df = df.rename(columns={'abbrev': 'state'})
    columns = ['city', 'state', 'pop', 'age', 'household', 'individual', 'house', 'coli']
    return df[columns].to_dict('records', into=OrderedDict)[0]


@router.get('/all_cities/') #, response_model=List[schemas.City])
async def get_all_cities():
    '''
    Returns a list of all cities and their stats

    ### Response
    JSON string containing 
    - **city**: [str] . . . standard format city name
    - **state**: [str] ... standard format state name
    - **pop**: [int] . . . population estimate
    - **age**: [float] . . . average age of residents
    - **household**: [int] . . . median household income
    - **individual**: [int] . . . median individual income
    - **house**: [int] . . . median home/condo price
    - **coli**: [float] . . . Cost of Living Index [ACCRA Cost of Living Index](https://en.wikipedia.org/wiki/ACCRA_Cost_of_Living_Index)
    '''
    query = '''SELECT *
                FROM
                    citydata
    '''
    df = fetch_query_records(query)
    df = df.rename(columns={'abbrev': 'state'})
    columns = ['city', 'state', 'pop', 'age', 'household', 'individual', 'house', 'coli']
    return df[columns].to_dict('records', into=OrderedDict)
