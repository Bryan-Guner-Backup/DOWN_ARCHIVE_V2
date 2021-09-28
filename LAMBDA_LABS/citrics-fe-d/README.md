
# LABS 28 - CITRICS TEAM D

You can find the deployed project [HERE](https://main.d2vgut56c5mq8l.amplifyapp.com/).

## Contributors

|                                                      [Ian Bautista](https://github.com/ianbautista)                                                       |                                                       [Nathan DeSpain](https://github.com/1like2learn)                                                        |                                                      [Zachary Peterson](https://github.com/zachary-peterson)                                                       |                                                       [Anthony Navarro](https://github.com/arn-foto)                                                        |                                                                                                       | 
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/ESZCHB482-W012K9VAUR1-03c9f16338fb-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W01247EJE6B-0a7b590eed74-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W014G4N3X3K-9e824ab96a6f-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JHWJYLS-2b68e2e4dae2-512" width = "200" />](https://github.com/) | 
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/glassbones)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jme-sull)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/e94canales)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wesley-ruedebusch)                           |                                                     |
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/christianbautista/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/nathan-despain)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/zacharytpeterson/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anthonyrnavarro/)                 |                

<br>
<br>


![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)


### Key Features

- Search for a city and compare its stats to the US National Average
- Add up to 10 cities to comparer
- Authenticate with Okta

#### Front end deployed to `AWS AMPLIFY`

#### [Back end](https://github.com/Lambda-School-Labs/citrics-be-d) built using:

- Java/Spring

# APIs

## Authentication API here

This app is authenticated using Okta. Learn more about [Okta](https://www.okta.com/)


# Installation Instructions
Clone this repo and install dependencies with npm

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

## Libaries and other info

- Ant Design: A few of the components were built using AntDesign. Learn more about AntDesign [here](https://ant.design/components/overview/)
- Styling: Styling was done primarily using styled components. Learn more about it [here](https://styled-components.com/)
- Custom Maps: Created Utilizing mapbox. Learn more about it [here](https://www.mapbox.com/navigation/)
- Summaries and Photos for the cities: Media was obtained through MediaWiki's API. Learn about it [here](https://en.wikipedia.org/api/rest_v1/#/)
- Redux - Redux was used for global state management 

## File Organization

- Components were separated into two folders:
   - Common: Componets that appear on multiple pages.
   - Pages: Folders for components that only appear on one page.
- Styling will be found in the page folders or in the JavaScript files.
- State Management - Find all of your Redux actions/reducers in the state folder

## Design Files and User Flow

-View our Figma designs and user flow outline on [Figma](https://www.figma.com/file/fq2yp1hsHSOZ8gLoHUWglI/Initial-Design?node-id=2%3A298)

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

See [Backend Documentation](https://labs27-c-citrics-api.herokuapp.com/swagger-ui.html#/) for details on the backend of our project.

## CURRENT BUGS
- Removing cities will not change page unless searchbar is being rendered
- Searchbar styles are slightly off

