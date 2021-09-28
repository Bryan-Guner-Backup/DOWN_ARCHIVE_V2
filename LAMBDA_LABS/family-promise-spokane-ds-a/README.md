
# Family Promise of Spokane

Welcome to the Data Science Team B's repository for the Family Promise of Spokane Project! This repository holds all the source code for our API as well as the predictive model used by the app. At this time, there have been three iterations of this project with three different teams, each building upon the last.

# Description

The Family Promise of Spokane is a US-based nonprofit organization based in Spokane, WA. They are an organization that aims to curb homelessness for families through both corrective and preventive measures. Their services include providing shelter for families as well as rental assitance. For more details of the organizations and the amazing work they do, be sure to check out their [website](https://www.familypromiseofspokane.org/).  

## User Flow

The aim of the project is to eventually have a central app for all user types of Family Promise.

[Trello Board](https://trello.com/b/FyWvcZzY/family-promise-of-spokane) (Iteration 1) <br>
[Trello Board](https://trello.com/b/uZDhMoRt/labs-31-family-promise-b) (Iteration 3)


### Curent key features:

Guests:
- Can log in and reserve services
- Can view their profiles and reservations

Case managers:
- Can log in and create guest profiles
- Can view guest profile
- Can add notes to a guest's profile and flag a guest for misconduct

Supervisors:
- Same accessibility as case managers
- Can predict a guest's exit type

Executive director:
- Same accessibility as supervisors
- Can view the shelter's KPIs


# Contributors

## Data Science Team

| [Kristine Wang](https://github.com/KristineYW) | [Tyler Etheridge](https://github.com/tyleretheridge) | [Santiago Berniz](https://github.com/sberniz/) | [Christopher Lee](https://github.com/chrislee973) |
| :---: | :---: | :---: | :---: | 
| [<img src="https://avatars0.githubusercontent.com/u/63246056?s=400&u=a10524916b756eb26132d0803bec3cbe62ede1ef&v=4" width = "200" />](https://github.com/KristineYW) | [<img src="https://avatars3.githubusercontent.com/u/61953470?s=400&u=8f8538f4d10dcb45b9179eb6990d1ef9c1aadc8d&v=4" width = "200" />](https://github.com/tyleretheridge) | [<img src="https://avatars3.githubusercontent.com/u/6207914?s=460&u=8bfaa068f7942170423371ff10e8f04f09f41e81&v=4" width = "200" />](https://github.com/sberniz/) | [<img src="https://avatars.githubusercontent.com/u/44345856?s=460&u=d27781ca6a5d01414c4ffbe7e0ac9986e3acd114&v=4" width = "200" />](https://github.com/chrislee973) |
| TPL | Data Scientist | Data Scientist | Data Scientist | 
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/KristineYW) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tyleretheridge) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/sberniz/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/chrislee973) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kristine-wang-ds/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tylerjetheridge/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/santiago-berniz/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/chrislee973/) |          

| [Ik Okoro](https://github.com/ik-okoro) | [Justin Rivest](https://github.com/jrivest2) |
| :---: | :---: |  
| [<img src="https://ca.slack-edge.com/ESZCHB482-W019Y5BRPEC-c1d88c2f8d2c-512" width = "200" />](https://github.com/ik-okoro) | [<img src="https://avatars.githubusercontent.com/u/55200197?s=460&u=3593bf0d5d9e919a817dd057345f0c5e35f1c6da&v=4" width = "200" />](https://github.com/jrivest2) | 
| Data Scientist | Data Scientist | 
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ik-okoro) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jrivest2) | 
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ik-okoro-ml-engineer) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/justinrivest/) |          

<br>          

## Future Teams

Any future DS team assigned to the project for Labs32, ensure you view 31's guide **[doc](https://docs.google.com/document/d/1L0zMq-3E6g_WDIv0JCtq6XCbRkkM8Q3Tm0J3PXwKNXc/edit?usp=sharing)**.    

<br>
<br>

# Deployments

As long as the sites are still hosted, you can find the deployments for each of the three branches of the full product below. Otherwise, to view source code or deploy locally, please see the linked repositories instead in the next section.  

[Front End Dashboard](https://b.familypromisesofspokane.dev/) |
[Data Science API](https://b-ds.familypromisesofspokane.dev/) |
[Back End API](https://family-promise-spokane-be-b.herokuapp.com/) 

# Linked Repositories

[Family Promise of Spokane Front end](https://github.com/Lambda-School-Labs/family-promise-spokane-fe-b) | 
[Family Promise of Spokane Back End](https://github.com/Lambda-School-Labs/family-promise-spokane-be-b) 

## Architecture Chart
![Architecture](https://github.com/Lambda-School-Labs/family-promise-spokane-ds-a/raw/main/architecture_diagram2.png)


# Getting Started

## Libraries
![fastapi](https://img.shields.io/badge/fastapi-0.60.1-blue)
![uvicorn](https://img.shields.io/badge/uvicorn-0.11.8-ff69b4)

![sqlalchemy](https://img.shields.io/badge/sqlalchemy-1.3.23-00cc96)
![python-dotenv](https://img.shields.io/badge/python--dotenv-0.14.0-green)

![pandas](https://img.shields.io/badge/pandas-1.1.0-blueviolet)
![scikit-learn](https://img.shields.io/badge/scikit--learn-0.22.2.post1-yellow)
![plotly](https://img.shields.io/badge/plotly-4.14.3-ab63fa)


## Setup Instructions

In your CLI, clone the repository to your local machine using:

    git clone <repository link>

In order for the app to function correctly, the user must set up valid environment variables. There should be a .env file  in the root project directory containing the following:

    SQLALCHEMY_DATABASE_URL = Postgres database credentials

To run the FastAPI app from your CLI, use:

    uvicorn app.main:app --reload

You should be able to see the app running in your [localhost](http://127.0.0.1:8000) after application startup is complete.


<!--
## Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| Nopic.yet      | INSERT NAME      | [MIT](input githandle here)                             |
-->

# Tech Stack

### Deployed API built with:

- Python
- FastAPI
- Docker
- AWS Elastic Beanstalk
- PostgreSQL

### Reasons for tech stack choices:

- Gain insight into AWS deployments and debugging with Docker
- Speed of FastAPI and its increase in popularity
- Solid structure with SQL queries



# Issues
**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.


# Support
Santiago and Tyler on slack. 

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Describe what you have changed in this repo as a team
Provide examples and descriptions of components, how props are handled, where to find these changes, database tables, models, etc.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.



### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

