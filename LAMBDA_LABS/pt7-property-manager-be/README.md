
# Badges

[![Maintainability](https://api.codeclimate.com/v1/badges/fc736139272b3e317155/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/pt7-property-manager-be/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/fc736139272b3e317155/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/pt7-property-manager-be/test_coverage)

## Contributors

|                                      [Darren Carrillo](https://github.com/darrenjcarrillo)                                       |                                             [Sage Jordan](https://github.com/sage-jordan)                                             |                                          [Carlos Mitchell](https://github.com/nebadon1)                                          |                                              [Caleb Redd](https://github.com/calebredd)                                               |                                         [Edward Ridgely](https://github.com/etridgely)                                         |                                       [Carlos Sanchez](https://github.com/lohrem)                                       |
| :------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULZR0L7JL-cd8c0f05f9eb-512" width = "200" />](https://github.com/darrenjcarrillo) |     [<img src="https://ca.slack-edge.com/T4JUEB3ME-UG0RALX16-4eb2d98cbeb3-512" width = "200" />](https://github.com/sage-jordan)      |    [<img src="https://ca.slack-edge.com/T4JUEB3ME-UGWPH7DJ4-a001bca030c9-512" width = "200" />](https://github.com/nebadon1)     |      [<img src="https://ca.slack-edge.com/T4JUEB3ME-UGZNPKR62-adb84fddada3-512" width = "200" />](https://github.com/calebredd)       |   [<img src="https://ca.slack-edge.com/T4JUEB3ME-UJ7M4NLTD-5fb21401f57a-512" width = "200" />](https://github.com/etridgely)   | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UF3J9R4LD-0bb156893420-512" width = "200" />](https://github.com/lohrem) |
|                   [<img src="https://github.com/favicon.ico" width="15">](https://github.com/darrenjcarrillo)                    |                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/sage-jordan)                        |                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/nebadon1)                       |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/calebredd)                         |                     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/etridgely)                     |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lohrem)                   |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/darrenjcarrillo)  | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sage-jordan-3682a2a0/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/carlosamitchell/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/caleb-redd-592423120/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/edwardridgely/) |      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)      |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![npm](https://img.shields.io/node/v/@cycle/core)
![Node.js](https://img.shields.io/npm/v/@cycle/core)

# API Documentation

#### 1️⃣ Backend delpoyed at Heroku (https://property-manager-be.herokuapp.com/) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework goes here

- We chose Node/Express to make our backend server. This was mainly because of the Lambda Labs standards and familiarity.
- For our database, we used postgresql and knex, for the same reasons.

## 2️⃣ Endpoints

#### Auth Routes

| Method | Endpoint         | Access Control | Description                       |
| ------ | ---------------- | -------------- | --------------------------------- |
| POST   | `/auth/register` | All users      | Registers a user, returns a token |
| POST   | `/auth/login`    | All users      | Logs in a user, returns a token   |

#### User Routes

| Method | Endpoint             | Access Control  | Description                     |
| ------ | -------------------- | --------------- | ------------------------------- |
| GET    | `/users`             | All users       | Returns logged in user info.    |
| GET    | `/users/:id`         | All users       | Returns user by ID.             |
| GET    | `/users/manager/:id` | All users       | Returns manager by ID.          |
| PUT    | `/users/:id`         | Loggged in user | Edit users profile information. |
| DELETE | `/users/:id`         | Loggged in user | Delete your user profile.       |

#### Properties Routes

| Method | Endpoint                  | Access Control                          | Description                      |
| ------ | ------------------------- | --------------------------------------- | -------------------------------- |
| GET    | `/properties`             | All users                               | Returns all properties.          |
| POST   | `/properties`             | Logged in Manager                       | Creates a property.              |
| GET    | `/properties/:id`         | All users                               | Returns property by ID           |
| PUT    | `/properties/:id`         | Manager can edit their own properties   | Modify an existing property.     |
| GET    | `/properties/manager/:id` | All users                               | Returns property by manager ID.  |
| DELETE | `/properties/:id`         | Manager can delete their own properties | Delete a property.               |
| GET    | `/:id/units`              | All users                               | Returns property with all units. |

#### Units Routes

| Method | Endpoint     | Access Control                    | Description              |
| ------ | ------------ | --------------------------------- | ------------------------ |
| GET    | `/units`     | All users                         | Returns all units.       |
| POST   | `/units`     | Logged in Manager                 | Creates a unit.          |
| GET    | `/units/:id` | All users                         | Returns unit by ID.      |
| PUT    | `/units/:id` | Manager can edit their own unit   | Modify an existing unit. |
| DELETE | `/units/:id` | Manager can delete their own unit | Delete a unit.           |

#### Lease Terms Routes

| Method | Endpoint          | Access Control | Description                    |
| ------ | ----------------- | -------------- | ------------------------------ |
| GET    | `/leaseterms`     | All users      | Returns all lease terms.       |
| POST   | `/leaseterms`     | All users      | Creates a lease term.          |
| GET    | `/leaseterms/:id` | All users      | Returns lease term by ID.      |
| PUT    | `/leaseterms/:id` | All users      | Modify an existing lease term. |
| DELETE | `/leaseterms/:id` | All users      | Delete a lease term.           |

#### Applications Routes

| Method | Endpoint            | Access Control     | Description                     |
| ------ | ------------------- | ------------------ | ------------------------------- |
| GET    | `/applications`     | Logged in Managers | Returns all applications.       |
| POST   | `/applications`     | All users          | Creates a application.          |
| GET    | `/applications/:id` | Logged in Managers | Returns application by ID       |
| PUT    | `/applications/:id` | Logged in Managers | Modify an existing application. |
| DELETE | `/applications/:id` | Logged in Managers | Delete a application.           |
# Data Model

#### USERS

---

```
{
  "email": "email@email.com",
  "password": "pass",
  "phoneNumber": "3171543251",
  "firstName": "John",
  "lastName": "Doe",
  "role": "Renter",
  "img": "url.here"
}
```

#### PROPERTIES

---

```
{
  "name": "House Name",
  "img": "url.here",
  "manager_id": 1
},
```

#### UNITS

```
{
  "number": 1,
  "renter_id": 1,
  "lease_id": 1,
  "property_id": 1,
  "description": "State of the art kitchen, will accommodate people with fast metabolism",
  "date_available": "2020-02-11",
  "parking": "No parking",
  "type": "Type 2",
  "cooling": "centralized",
  "heating": "Yes",
  "pets": "Yes",
  "laundry": "Inside unit",
  "fees": 5555.25,
  "sqft": 2000,
  "elementary": "Yes",
  "middle": "Yes",
  "high": "Yes",
  "district": "Yes",
}
```

#### LEASE TERMS

```
{
  "payment_due_date": "2020-02-11",
  "lease_start_date": "2020-02-11",
  "lease_end_date": "2021-02-11",
  "lease_term": "12",
  "monthly_rent": 1000,
  "security_deposit": 2000
}
```

#### APPLICATIONS

```
{
  "address": "cash",
  "date_of_birth": "1985-10-11",
  "dl_number": "132323232",
  "social_security": "323-85-4544",
  "document": "url",
  "status": "approved"
}
```

#### Actions

## Users

`addUser(user)` -> Creates a new user

`findAllUsers()` -> Returns all users

`findBy(filer)` -> Returns all users by filter (email, name, etc.)

`removeUser(id)` -> Removes a user by id

`findUserByid(id)` -> Gets user by id

`findManagerByid(id)` -> Gets Manager by id

`updateUser(changes, id)` -> Updates user profile
<br>
<br>
<br>

## Properties

`add(property)` -> Adds property

`find()` -> Gets all properties

`findByid(id)` -> Gets property by ID

`update(changes, id)` -> Updates property by ID

`remove(id)` -> Deletes property by ID

`findManagersProperties(id)` -> Gets all properties by manager ID

## Lease Terms

`addLeaseTerm()` -> Adds lease term

`findAllLeaseTerm()` -> Gets all lease terms

`findLeaseTermById(id)` -> Gets lease term by ID

`updateLeaseTerm(id)` -> Updates lease term by ID

`removeLeaseTerm(id)` -> Deletes lease term by ID

## Units

`addUnit()` -> Adds unit

`findAllUnits()` -> Gets all units

`findUnitById(id)` -> Gets unit by ID

`updateUnit(id)` -> Updates unit by ID

`removeUnit(id)` -> Deletes unit by ID

`getPropertiesUnits(property_id)` -> Gets list of units associated with property by ID

## Applications

`addApp()` -> Adds application

`findAllApps()` -> Gets all applications

`findAppById(id)` -> Gets application by ID

`updateApp(id)` -> Updates application by ID

`removeApp(id)` -> Deletes application by ID

#### 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

- DB_ENV - set to "development" until ready for "production"
- JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;\*(-*=+)') for i in range(50)])

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

See [Frontend Documentation](https://github.com/Lambda-School-Labs/pt7-property-manager-fe) for details on the fronend of our project.
