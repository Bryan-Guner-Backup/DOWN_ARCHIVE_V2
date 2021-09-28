[![Maintainability](https://api.codeclimate.com/v1/badges/13f17f26b8dd33daa361/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/grants-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/13f17f26b8dd33daa361/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/grants-fe/test_coverage)

# Granted

## You can find the deployed project at [Granted](http://www.writemygrants.net/).

# Contributors

|                                                [Natalie Davis](https://github.com/FreedomWriter)                                                                       |                                          [Lee Wood](https://github.com/LeeWood)                                                                              |                                       [Blupe](https://github.com/JorgeLuisFlores)                                                  |                                             [Danica Valdez](https://github.com/danicavaldez)                                             |                                      [Brett Karr](https://github.com/bwkarr77)                                                                                    |                                          [Toosdai Otte](https://github.com/ToosdaiOtte)                                                                              |                                                                         [Eva Gurtovaya](https://github.com/EvaGurtovaia)                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars3.githubusercontent.com/u/50391354?s=460&u=de69d8dd0b258edc2f505dd94f1be5cfefc9eea3&v=4" width = "200" />](https://github.com/FreedomWriter) | [<img src="https://avatars3.githubusercontent.com/u/50416443?s=460&u=e8378afea987c11f6fe35353ec495b0d95c1ace9&v=4" width = "200" />](https://github.com/LeeWood) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JPXVC9Z-c3a1c9b62907-512" width = "200" />](https://github.com/JorgeLuisFlores) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012BRL40TG-6ab102c6f609-512" width = "200" />](https://github.com/danicavaldez)          | [<img src="https://avatars1.githubusercontent.com/u/52165192?s=460&u=a31a648f89dc0669b701455c0ec1371abb573432&v=4" width = "200" />](https://github.com/bwkarr77) | [<img src="https://avatars2.githubusercontent.com/u/46979151?s=460&u=d491afdbcd54aa137f2b8438b61e3ccf238dc20b&v=4" width = "200" />](https://github.com/ToosdaiOtte) | [<img src="https://avatars0.githubusercontent.com/u/34386254?s=460&u=1c092474c5ad0202ad00ed4da4a8604cde0f19be&v=4" width = "200" />](https://github.com/EvaGurtovaia) |
|                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/FreedomWriter)                                                  |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/LeeWood)                                                  |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JorgeLuisFlores)              |                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/danicavaldez)                                 |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bwkarr77)                                                    |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ToosdaiOtte)                                                    |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/EvaGurtovaia)                                                    |
|       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/natalie-davis-64111595/)                          |          [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/leemwood/)                               | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jorgeluis-flores/)  | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/danica-valdez-b676761a6/) |                           [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ]                                                      | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/toosdai-otte/)                                        |           [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/eva-gurtovaya-586baa124/)                    |


<br>
<br>

# Project Overview

 [Trello Board](https://trello.com/b/ry8wjYUz/granted)

 [Product Canvas](https://www.notion.so/Granted-4e7631ec63c04ef98f41dbf1235cbab5)

Connecting grant writers with individuals and organizations looking for a grant writer for their RFPs and grant applications. 

# Key Features

- Dashboard with available grant listings
- User Profiles (Grantees / Grant Writers)
- Grantees can add new grant listings to the dashboard.
- Grant writers can favorite grants and view their list of favorites.

# Tech Stack

### Front end built using:


#### - React

- Scalable and lightweight
- Healthy ecosystem of libraries
- React uses JavaScript which is robust , making it: simple, focused, and consistent
- Ability to use Redux for state management

#### - Redux

- More powerful than Context Api
- Redux has capabilities like: thunk, saga, persist, etc. that allow for greater state control

#### - Material-UI (styling)

- Built in 508 compliance
- Easy customization
- Built-in components
- Easy to integrate responsiveness
- Themes make styling easier
- Plenty of documentation
- Regular updates


#### Front end deployed to `Heroku`

#### [Back end](https://github.com/Lambda-School-Labs/grants-be) built using:

- Node.JS
- Express
- PostgreSQL

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_GRANTED_API - link to the base URL for backend endpoints. Set to locally hosted version of the database for development and deployed base URL of database for production. 
  

# Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| opaque-background.jpeg   | Burst   | [Creative Commons](https://unsplash.com/photos/kUqqaRjJuw0) |                         |

# Testing

#### - Jest
- Quick and lightweight
- Works very well with JS
- Expandable framework

# Installation Instructions

- fork and clone this repository.
- CD into the folder where you cloned your fork.
- type `npm i` to download dependencies.
- add .env file for environmental variables.
- type `npm start` to run locally.

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \
    * eject - copy the configuration files and dependencies into the project so you have full control over them
    * coverage - runs tests and returns coverage percentage on repo

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

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

## Back End

See [Back End Repo](https://github.com/Lambda-School-Labs/grants-be/blob/master/README.md) for details on the back end of our project.
