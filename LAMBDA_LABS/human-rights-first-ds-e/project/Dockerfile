# pull official base image
FROM python:3.7-slim-buster

# set working directory
WORKDIR /usr/src/app

# install python dependencies
RUN apt-get update && apt-get install -y libpq-dev gcc
RUN python -m pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
RUN pip3 install psycopg2~=2.8
RUN python -m spacy download en_core_web_sm

# add app
COPY . .
