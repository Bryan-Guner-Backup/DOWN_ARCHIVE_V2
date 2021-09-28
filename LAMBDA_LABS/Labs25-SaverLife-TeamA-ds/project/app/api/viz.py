import logging
import plotly.express as px
import plotly.graph_objects as go
import pandas as pd

from fastapi import APIRouter, HTTPException
from app.helpers import *
from app.user import User
from pydantic import BaseModel, Field, validator
from typing import Optional

log = logging.getLogger(__name__)
router = APIRouter()


class Item(BaseModel):
    """Use this data model to parse the request body JSON."""
    bank_account_id: int = Field(..., example=131952)
    graph_type: str = Field(..., example='pie')
    time_period: str = Field(..., example='week')
    color_template: Optional[str] = Field('Greens_r', example='Greens_r')
    hole: Optional[float] = Field(0.8, example=0.8)

    def to_df(self):
        """Convert pydantic object to pandas dataframe with 1 row."""
        return pd.DataFrame([dict(self)])

    def to_dict(self):
        """Convert pydantic object to python dictionary."""
        return dict(self)

    @validator('bank_account_id')
    def user_ID_must_exist(cls, value):
        """Validate that user_id is a valid ID."""
        conn = psycopg2.connect(user=SAVER_USERNAME, password=SAVER_PASSWORD,
                                host=SAVER_DB_HOST, dbname=SAVER_DB_NAME)
        query = f"""
        SELECT id
        FROM PUBLIC.plaid_main_transactions
        WHERE bank_account_id = {value}
        LIMIT 1
        """
        df = pd.read_sql(query, conn)
        conn.close()
        assert len(df) > 0, f'the bank_account_id {value} is invalid'
        return value

    @validator('color_template')
    def color_template_must_be_valid(cls, value):
        """Validate that the color_template value is valid"""
        color_template_set = set(
            ['Aggrnyl', 'Aggrnyl_r', 'Agsunset', 'Agsunset_r',
             'Blackbody', 'Blackbody_r', 'Bluered', 'Bluered_r', 'Blues',
             'Blues_r', 'Blugrn', 'Blugrn_r', 'Bluyl', 'Bluyl_r',
             'Brwnyl', 'Brwnyl_r', 'BuGn', 'BuGn_r', 'BuPu', 'BuPu_r',
             'Burg', 'Burg_r', 'Burgyl', 'Burgyl_r', 'Cividis',
             'Cividis_r', 'Darkmint', 'Darkmint_r', 'Electric', 'Electric_r',
             'Emrld', 'Emrld_r', 'GnBu', 'GnBu_r', 'Greens',
             'Greens_r', 'Greys', 'Greys_r', 'Hot', 'Hot_r', 'Inferno',
             'Inferno_r', 'Jet', 'Jet_r', 'Magenta', 'Magenta_r',
             'Magma', 'Magma_r', 'Mint', 'Mint_r', 'OrRd', 'OrRd_r',
             'Oranges', 'Oranges_r', 'Oryel', 'Oryel_r', 'Peach',
             'Peach_r', 'Pinkyl', 'Pinkyl_r', 'Plasma', 'Plasma_r',
             'Plotly3', 'Plotly3_r', 'PuBu', 'PuBuGn', 'PuBuGn_r',
             'PuBu_r', 'PuRd', 'PuRd_r', 'Purp', 'Purp_r', 'Purples',
             'Purples_r', 'Purpor', 'Purpor_r', 'Rainbow', 'Rainbow_r',
             'RdBu', 'RdBu_r', 'RdPu', 'RdPu_r', 'Redor', 'Redor_r',
             'Reds', 'Reds_r', 'Sunset', 'Sunset_r', 'Sunsetdark',
             'Sunsetdark_r', 'Teal', 'Teal_r', 'Tealgrn', 'Tealgrn_r',
             'Viridis', 'Viridis_r', 'YlGn', 'YlGnBu', 'YlGnBu_r',
             'YlGn_r', 'YlOrBr', 'YlOrBr_r', 'YlOrRd', 'YlOrRd_r',
             'algae', 'algae_r', 'amp', 'amp_r', 'deep', 'deep_r',
             'dense', 'dense_r', 'gray', 'gray_r', 'haline',
             'haline_r', 'ice', 'ice_r', 'matter', 'matter_r', 'solar',
             'solar_r', 'speed', 'speed_r', 'swatches', 'tempo',
             'tempo_r', 'thermal', 'thermal_r', 'turbid', 'turbid_r',
             ])

        error_str = f'the color template, {value}, is invalid. Please see a list of valid templates at https://plotly.com/python/builtin-colorscales/#builtin-sequential-color-scales'
        assert value in color_template_set, error_str
        return value


class MoneyFlow(BaseModel):
    """Use this data model to parse the request body JSON."""
    bank_account_id: int = Field(..., example=131952)
    time_period: str = Field(..., example='week')

    def to_df(self):
        """Convert pydantic object to pandas dataframe with 1 row."""
        return pd.DataFrame([dict(self)])

    def to_dict(self):
        """Convert pydantic object to python dictionary."""
        return dict(self)

    @validator('bank_account_id')
    def user_ID_must_exist(cls, value):
        """Validate that user_id is a valid ID."""
        conn = psycopg2.connect(user=SAVER_USERNAME, password=SAVER_PASSWORD,
                                host=SAVER_DB_HOST, dbname=SAVER_DB_NAME)
        query = f"""
        SELECT id
        FROM PUBLIC.plaid_main_transactions
        WHERE bank_account_id = {value}
        LIMIT 1
        """
        df = pd.read_sql(query, conn)
        conn.close()
        assert len(df) > 0, f'the bank_account_id {value} is invalid'
        return value


@router.post('/moneyflow')
async def moneyflow(moneyflow: MoneyFlow):
    """
    Visualize a user's money flow 📈
    ### Request Body
    - `bank_account_id`: int
    - `time_period`: str (week, month, year, all)

    ### Response
    - `plotly object`:
    visualizing the user's money flow over the specified time period.
    """
    # Get the JSON object from the request body and cast it to a dictionary
    input_dict = moneyflow.to_dict()
    bank_account_id = input_dict['bank_account_id']
    time_period = input_dict['time_period']

    transactions = load_user_data(bank_account_id)

    user = User(transactions)
    return user.money_flow(time_period=time_period)


@router.post('/spending')
async def spending(item: Item):
    """
    Make visualizations based on past spending 📊
    ### Request Body
    - `bank_account_id`: int
    - `graph_type`: str (pie or bar)
    - `time_period`: str (week, month, year, all)
    - `OPTIONAL: color_template`: [Color Template Options (Sequential only)](https://plotly.com/python/builtin-colorscales/#builtin-sequential-color-scales)
    - `OPTIONAL: hole`: float (0 - 1)
    ### Response
    - `plotly object`:
    visualizing the user's spending habits in the form of the selected graph
    type.
    """
    # Get the JSON object from the request body and cast it to a dictionary
    input_dict = item.to_dict()
    bank_account_id = input_dict['bank_account_id']
    graph_type = input_dict['graph_type']
    time_period = input_dict['time_period']
    color_template = input_dict['color_template']
    hole = input_dict['hole']

    transactions = load_user_data(bank_account_id)

    user = User(transactions, hole=hole)

    if graph_type == 'pie':
        return user.categorical_spending(time_period=time_period,
                                         color_template=color_template)

    if graph_type == 'bar':
        return user.bar_viz(time_period=time_period,
                            color_template=color_template)
