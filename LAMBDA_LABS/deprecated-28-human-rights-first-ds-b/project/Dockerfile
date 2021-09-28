FROM python:3.8-slim-buster

# Controls Python's disk access and buffering
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Retrieves Linux updates
RUN apt-get update
RUN apt-get upgrade -y

# Copy the project files
WORKDIR /usr/src/project
COPY . .

# Installs Python dependencies
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN python -m spacy download en_core_web_sm
