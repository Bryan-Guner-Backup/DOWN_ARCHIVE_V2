# Grantlify: the Startup Grant Database

You can find the deployed project at www.grantlify.com.

## Contributors

|                                       [Fritz Gamboa](https://github.com/fritzgt)                                        |                                       [Ernesto Pena](https://github.com/ErnestoPena)                                        |                                       [Scott Schindler](https://github.com/scottschindler)                                        |                                       [Claire Sinozich](https://github.com/csinozich)                                        |                                       [Jonathan Traverso](https://github.com/jonnytrav)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://media-exp2.licdn.com/dms/image/C4E03AQGUkbjkqCwxBA/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=pWzHZqws2iMVAXflpaZm3GsM3gfHBHmZ6aoHOf37qjw" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://media.licdn.com/dms/image/C5603AQHeLp7ZHAEASQ/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=NNKkwh8cReCNNTOWvKZj8cxI0dsZxAH5FIvUdp55I5Y" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/honda0306)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/csinozich)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/clairesinozich/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://trello.com/b/ickDms9E/start-up-grant-database)

[Product Canvas](https://www.notion.so/Start-Up-Grant-Database-8f27bfd8684d418aa70b33b8468ef8e2)

[UX Design files](https://xd.adobe.com/spec/bf8bf6ec-3666-4842-745b-e0c4288ce0aa-c9ba/screen/de0e4215-e632-44fa-b62a-56ca0878e5a5/Dashboard-Main-Grant-Giver/)

The Startup Grant Database (Grantlify) is a location for founders and entrepreneurs to find grants for their startups based on eligibility categories for both the founders and the company. Organizations that give grants can also post their grants online and accept applications through the Grantlify app.

### Key Features

-    Browse and Search for Grants nation-wide
-    Create a Grantee Account and Save Grants
-    Create a Grantor Account and Post Grants
-    Apply for Grants
-    Receive Grant Applications

## Tech Stack

### Front end built using:

#### React
We chose to use React, React Router, and React Hooks for our application's front-end. These technologies were chosen because of their overall speed and current popularity. 

- React Router 
- React Hooks
- Material UI
- Moment

#### Front end deployed to `Netlify`

#### [Back end](https://startup-grant-database.herokuapp.com/) built using:

#### NodeJS, PostgreSQL, Express, Knex

We chose this tech stack because Node and express provide great boilerplate to get a quality server running quickly. We chose PostgreSQL because we wanted to use RDBMS to be able to establish relationships with our tables and make SQL queries that allow us to join tables and bring the data together easily. 

- NodeJS
- PostgreSQL
- Express
- Knex

# APIs

## Authentication: Firebase

We used Firebase for our authentication. Firebase is easy to use and ubiquitous, allowing us to create an interface that people are familiar with while allowing them to sign in with their Google accounts.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_FIREBASE_KEY
    *  REACT_APP_MESSAGIN_SENDER_ID
    *  REACT_APP_APP_ID
    *  REACT_APP_API=http://localhost:10000

# Content Licenses

none

# Testing

🚫Document what you used for testing and why

# Installation Instructions

This application runs on npm. You will need to add: 

    * @material-ui/core
    * @material-ui/icons
    * axios
    * firebase
    * firebaseui
    * moment
    * react
    * react-dom
    * react-multiselect-checkboxes
    * react-router-dom
    * use-global-hook

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them
    * eject - removes react
    * run:cypress - runs cypress for testing

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

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

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/startup-grant-database-pt5-be) for details on the backend of our project.
