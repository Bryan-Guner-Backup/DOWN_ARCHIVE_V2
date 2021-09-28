[![Maintainability](https://api.codeclimate.com/v1/badges/e7cfe9947a337fbaf18f/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/nutrition-tracker-fe-pt7/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e7cfe9947a337fbaf18f/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/nutrition-tracker-fe-pt7/test_coverage)

# Nutrivurv

You can find the deployed project at [nutrivurv.com](https://www.nutrivurv.com/).

## Contributors

**LABS 20**

|                                        [Alessandra Longaretti](https://github.com/alesslongaretti)                                        |                                       [Christine Smith](https://github.com/ccsmith13)                                        |                                        [Dominic Bridgette](https://github.com/Afrodo1)                                        |                                       [Taty Novell](https://github.com/taty2010)                                        |                                                [Dave Vazquez](https://github.com/dave-vazquez)                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="./contributors/alessandra-longaretti.jpeg" width = "200" />](https://github.com/alesslongaretti) </br>Full Stack Web Developer | [<img src="./contributors/christine-smith.png" width = "200" />](https://github.com/ccsmith13) </br>Full Stack Web Developer | [<img src="./contributors/dominic-bridgette.jpeg" width = "200" />](https://github.com/Afrodo1) </br>Full Stack Web Developer | [<img src="./contributors/taty-novell.png" width = "200" />](https://github.com/taty2010) </br>Full Stack Web Developer | [<img src="./contributors/dave-vazquez.jpeg" width = "200" />](https://github.com/dave-vazquez) </br>Full Stack Web Developer /</br> Team Lead |

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://trello.com/b/9EYWw5vc/labs-pt11-nutrivurv)

[Product Canvas](https://www.notion.so/Nutrition-Tracker-c05986bd547e429f97d2e3a75e97b32d)

[UX Design files](https://www.figma.com/file/yqpTM7IYO90dVNPBsxaQrG/NutriJournal%2C-Ashes-%26-Tricia?node-id=122%3A2)

Learning how to eat healthy and making a lifestyle change is overwhelming and difficult. There is a lack of education and many new habits that need to be developed which deter people from meeting their health goals. Reading food labels to track calories and other nutritional factors is tedious and time-consuming.

Nutrivurv is an application that helps users take control of a healthier lifestyle. The application makes it easy to track critical health information; whether that is macros, calories, or any other food data that you use in working towards a healthier life.

### Key Features

- Comprehensive onboarding process designed to collect information from user to compute daily caloric/macronutrient budgets based on lifestyle and desired weight targets.

## Tech Stack

#### Front end deployed to [Heroku](https://nutrivurv.herokuapp.com/) and built using

- **React/Redux** - UI/Application State Managment
- **BootStrap** - Styling

#### Back end deployed to [Heroku](https://nutrivurv-be.herokuapp.com/) built using:

- **Postgres** - Data Persistence
- **ExpressJS** - Server Routing
- **JWT** - User Session Authentication

## Edamam Food Database API

At it's core, Nutrivurv is based around the globally recognized, industry-leading Edamam Food Database collection. Data from two of these comprehensive databases is then used to generate a wide variety of custom user-requested calculations.

Edamam Food Database endpoint: https://api.edamam.com/api/food-database

# Content Licenses

All images and icons [Copyright 2020 Katerina Limpitsouni](https://undraw.co/license), used with permission.

# Installation Instructions

- Fork and Clone this Repository
- CD to your local copy of the repo
- In terminal type EITHER `npm install` or `yarn install`
- Create a `.env` file with the following variables:
  ```
  REACT_APP_NUTRIVURV_API=https://nutrivurv-be.herokuapp.com
  NODE_ENV=development
  ```

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

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/nutrition-tracker-be-pt7/blob/master/README.md) for details on the backend of our project.
