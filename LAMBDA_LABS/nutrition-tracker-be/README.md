ð« Note: All lines that start with ð« are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

ð« The numbers 1ï¸â£ through 3ï¸â£ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

ð« Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1ï¸â£ Backend delpoyed at [ð«name service here](ð«add URL here) <br>

## 1ï¸â£ Getting started

To get the server running locally:

ð« adjust these scripts to match your project

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Backend framework goes here

ð« Why did you choose this framework?

-    Point One
-    Point Two
-    Point Three
-    Point Four

## Production Dependencies

- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/)
- [helmet](https://helmetjs.github.io/)
- [knex](http://knexjs.org/)
- [knex-cleaner](https://www.npmjs.com/package/knex-cleaner)
- [mixpanel](https://docs.google.com/document/d/1YabpIkgGi6J4AJ-mhcspcWf-z0NP56gIY344lf20E5o/edit)
- [moment](https://momentjs.com/)
- [morgan](https://github.com/expressjs/morgan)
- [pg](https://node-postgres.com/)
- [uuid](https://www.npmjs.com/package/uuid)
- [sentry](https://blog.sentry.io/2018/03/06/the-sentry-workflow)
- [axios](https://github.com/axios/axios)
- [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [validator](https://www.npmjs.com/package/validator)



## Development Dependencies

- [cross-env](https://www.npmjs.com/package/cross-env)
- [jest](https://jestjs.io/)
- [nodemon](https://nodemon.io/)
- [supertest](https://github.com/visionmedia/supertest)


## 2ï¸â£ Endpoints

ð«This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

#### Organization Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/organizations/:orgId` | all users      | Returns the information for an organization. |
| PUT    | `/organizatoins/:orgId` | owners         | Modify an existing organization.             |
| DELETE | `/organizations/:orgId` | owners         | Delete an organization.                      |

#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/current`        | all users           | Returns info for the logged in user.               |
| GET    | `/users/org/:userId`    | owners, supervisors | Returns all users for an organization.             |
| GET    | `/users/:userId`        | owners, supervisors | Returns info for a single user.                    |
| POST   | `/users/register/owner` | none                | Creates a new user as owner of a new organization. |
| PUT    | `/users/:userId`        | owners, supervisors |                                                    |
| DELETE | `/users/:userId`        | owners, supervisors |                                                    |

# Data Model

ð«This is just an example. Replace this with your data model

#### 2ï¸â£ ORGANIZATIONS

---

```
{
  id: UUID
  name: STRING
  industry: STRING
  paid: BOOLEAN
  customer_id: STRING
  subscription_id: STRING
}
```

#### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```

## 2ï¸â£ Actions

ð« This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3ï¸â£ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

ð« These are just examples, replace them with the specifics for your app
    
    *  SENTRY_DSN - Optional secret key for https://sentry.io error logging
    * PORT - dynamic port variable resolution when testing locally
    * DATABASE_URL - Postgres database url
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

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

See [Frontend Documentation](ð«link to your frontend readme here) for details on the fronend of our project.
ð« Add DS iOS and/or Andriod links here if applicable.
