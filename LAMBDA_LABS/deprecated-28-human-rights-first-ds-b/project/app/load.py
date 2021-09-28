import pandas as pd
import json
import urllib3
from bs4 import BeautifulSoup


def load_data() -> pd.DataFrame:
    """retrieves data from api, converts to dataframe
    Adding features and rearranging
    dataset to match previous data.csv format"""

    url = "https://api.846policebrutality.com/api/incidents?include=evidence"

    http = urllib3.PoolManager()
    response = http.request('GET', url)
    soup = BeautifulSoup(response.data, "html.parser")

    json_846 = json.loads(soup.text)
    incidents = json_846['data']

    df_846 = pd.DataFrame(incidents)

    # convert date to datetime
    df_846['date'] = pd.to_datetime(
        df_846['date'],
        infer_datetime_format=True,
    )

    # create converted date_text column
    df_846['date_text'] = df_846['date'].apply(lambda x: x.strftime("%B %m, %Y"))

    # Create latitude feature
    latitude = []

    for idx, row in df_846['geocoding'].iteritems():
        keys = row.keys()

        if 'lat' in keys:
            latitude.append(row['lat'])
        else:
            latitude.append(None)

    df_846['lat'] = latitude

    # Create longitude feature
    longitude = []

    for idx, row in df_846['geocoding'].iteritems():
        keys = row.keys()

        if 'long' in keys:
            longitude.append(row['long'])
        else:
            longitude.append(None)

    df_846['long'] = longitude

    # Drop empty columns, description is also empty but needed for current format
    # Evidence also isn't needed, as well as id (pub_id needs to be renamed to id)
    df_846 = df_846.drop(columns=['data', 'evidence'])

    # rename columns
    df_846 = df_846.rename(columns={
        "geocoding": "geolocation",
        "links": "src",
        "pub_id": "id",
        "description": "desc"
    })

    # reset index and include column header
    df_846.reset_index(inplace=True)
    df_846.set_index('index', drop=False, inplace=True)

    # re-order columns
    df_846 = df_846[
        ['src', 'state', 'city', 'desc', 'tags', 'geolocation', 'title', 'date',
         'date_text', 'id', 'lat', 'long']]

    return df_846
