# API Documentation

#### Backend delpoyed at [Heroku](https://mission-control-be.herokuapp.com) <br>

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework 

- Node.js
- Express.js
- Knex

## Endpoints

#### Programs Routes

| Method | Endpoint                     | Description                                                  |
| ------ | ---------------------------- | ------------------------------------------------------------ |
| GET    | `/api/programs`              | Returns info for all programs.                               |
| GET    | `/api/programs/:id`          | Returns info for specific program.                           |
| GET    | `/api/programs/:id/products` | Returns info for products associated with a specific program.|
| POST   | `/api/programs`              | Creates a new program.                                       |
| PUT    | `/api/programs/:id`          | Modify an existing program.                                  |
| DELETE | `/api/programs/:id`          | Delete an existing program.                                  |

#### Persons Routes

| Method | Endpoint                   | Description                                                      |
| ------ | -------------------------- | ---------------------------------------------------------------- |
| GET    | `/api/persons`             | Returns info for all persons.                                    |
| GET    | `/api/persons/:id`         | Returns info for a single person.                                |
| GET    | `/api/persons/email/:email`| Returns info for a single person associated with specified email.|
| GET    | `/api/persons/:id/project` | Returns all projects associated with a single person.            |
| POST   | `/api/persons/:id/:project`| Adds person to project.                                          |
| POST   | `/api/persons`             | Creates a new person.                                            |
| PUT    | `/api/persons/:id`         | Modifies an existing persons info                                |
| DELETE | `/api/persons/:id`         | Deletes an eisting person                                        | 

#### Products Routes

| Method | Endpoint                     | Description                                           |
| ------ | ---------------------------- | ------------------------------------------------------|
| GET    | `/api/products`              | Returns info for all products.                        |
| GET    | `/api/products/:id`          | Returns info for a single product.                    |
| GET    | `/api/products/:id/projects` | Returns all projects associated with a single product.|
| POST   | `/api/products/:id/projects` | Adds a new project to specified product.              |
| POST   | `/api/products`              | Creates a new product.                                |
| PUT    | `/api/persons/:id`           | Modifies an existing products info                    |
| DELETE | `/api/persons/:id`           | Deletes an existing product                           | 

### Projects Routes

| Method | Endpoint                     | Description                                           |
| ------ | ---------------------------- | ------------------------------------------------------|
| GET    | `/api/projects`              | Returns info for all projects.                        |
| GET    | `/api/projects/:id`          | Returns info for a single project.                    |
| POST   | `/api/projects`              | Creates a new project.                                |
| PUT    | `/api/projects/:id`          | Modifies an existing projects info                    |
| DELETE | `/api/projects/:id`          | Deletes an existing project                           | 


# Data Model



#### Programs

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

## 2?????? Actions

???? This is an example, replace this with the actions that pertain to your backend

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

## 3?????? Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

???? These are just examples, replace them with the specifics for your app
  
 _ STAGING_DB - optional development db for using functionality not available in SQLite
_ NODE_ENV - set to "development" until ready for "production"
_ JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;_(-_=+)') for i in range(50)])
_ SENDGRID_API_KEY - this is generated in your Sendgrid account \* stripe_secret - this is generated in the Stripe dashboard

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

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

See [Frontend Documentation](????link to your frontend readme here) for details on the fronend of our project.
???? Add DS iOS and/or Andriod links here if applicable.
