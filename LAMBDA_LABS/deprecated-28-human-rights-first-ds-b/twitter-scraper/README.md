
Scrape tweets from twitter into an sqlite DB.  Convert DB to a CSV file.

## Installation

`pip install -r requirements.txt`

may add additional filters to 'stream.filter(track=["police"])' within the 'scraper.py' file

## Usage

`python scraper.py` to scrape.  Use `Ctrl + C` to stop.
`python convert_csv.py` to generate `tweets.csv`, which contains all the tweet data that was scraped.