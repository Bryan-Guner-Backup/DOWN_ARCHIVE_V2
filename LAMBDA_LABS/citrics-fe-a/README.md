
# LABS 28 - CITRICS TEAM A

You can find the deployed project [HERE](https://a.citrics.dev/).

## Contributors

|                                                      [Jeremiah Trnka](https://github.com/kc0buk)                                                       |                                                       [Matthew Hidalgo](https://github.com/mhidalgo83)                                                        |                                                                                                                                                                                       
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | 
| [<img src="https://ca.slack-edge.com/ESZCHB482-W0143FPJF26-9452439419fb-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012BRS2AP8-6af31753eb91-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W0138D9M540-7c28e87840c9-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012QNU1NTE-f7e77e891394-512" width = "200" />](https://github.com/) | 
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kc0buk)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mhidalgo83)                             |                                                                         |
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jeremiahtrnka/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/matthew-hidalgo1)                 |                         

<br>
<br>


![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)


### Key Features

- Search for a city and compare its stats to the US National Average
- Add another city, and compare alongside currently displayed data
- Add a city to your favorites
- Authenticate with Okta
- Display in desktop or mobile 

#### Front end deployed to `AWS AMPLIFY`

#### [Back end](https://github.com/Lambda-School-Labs/citrics-be-a) built using:

- Java/Spring

# APIs

## Authentication API here

This app is authenticated using Okta. Learn more about [Okta](https://www.okta.com/)


# Installation Instructions
To run this application, you will need:
- REACT_APP_CLIENT_ID Okta client id (obtained from APL)
- REACT_APP_OKTA_ISSUER_URI Okta API authorization server issuer URI (eg. https://name-438r8hr.okta.com/oauth2/default) (obtained from APL)
- REACT_APP_API_URI The URL (localhost or live) for the Backend that you're building
- Fork and clone the repo to install it as your own remote.
- Please be sure to set your remote for this repo to point to your Labs Team Front End Repository.
- Run npm install to download all dependencies.
- Run npm start to start your local development server.
- Create dotenv file to store application secrets to run locally on your machine.

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

## Libaries and other info

- Ant Design: Many of the components were built using AntDesign. Learn more about AntDesign [here](https://ant.design/components/overview/)
- Styling: Styling was done using a combination of LESS and Javascript. We found it useful to override the AntDesign default styles with LESS by targeting the AntDesign classes
- Media Breakpoints: Media Breakpoints were done using react-break. Learn more about react-break [here](https://www.npmjs.com/package/react-break)
- Redux - Redux was used for global state management 

## File Organization

- Canvases - Canvases are custom built layouts - they are NOT Ant Design. Use them to create new pages by passing in components, as needed.
- Inline Styles - Each component folder has its own styles.js. These are inline styles being passed directly into the component. You can also edit styles from styles.less 
- State Management - Find all of your Redux actions/reducers in the state folder

## Design Files and User Flow

-View our wireframes, engineering architecture, and user flow outline on [Whimsical](https://whimsical.com/4UKop3aqMB3KJRG2LXZzM6)

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

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend README](https://github.com/Lambda-School-Labs/citrics-be-a/blob/master/README.md) for details on the backend of our project.

## CURRENT BUGS
- CityCard background images are not rendering (when our data science API was redeployed, the `wikiimgurl` property was not a part of the data collected by the team)
- Application re-renders after moving to `/compare` route, due to how we are handling the API call to our backend. Since all of the city data is captured on initial load from database, it would be more efficient to pull the cities in from the Redux store
- National Average data is hardcoded at state/actions/cardContainerActs.js line 65. Needs to be updated to work with new National Average DS API endpoint 
