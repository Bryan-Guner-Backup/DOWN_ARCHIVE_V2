[![Maintainability](https://api.codeclimate.com/v1/badges/5b1332f7827000a86252/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/voice-chatroom-be/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/5b1332f7827000a86252/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/voice-chatroom-be/test_coverage)

.

# API Documentation

####  Backend delpoyed at [Heroku](https://Wyzerapp.heroku.com) 

##  Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm start** to start the local server
- **npm test** to start server using testing environment

### Backend framework goes here

-    Stateless/Flexible framework.
-    Clean and Organized.
-    Separation between client and server increases scalability.
-    Adapts well to new environments and syntax.


## Endpoints



### User Routes

| Method | Endpoint                  | Access Control | Description                               |
| ------ | ------------------------- | -------------- | ----------------------------------------- |
| GET    | `/users`                  | all users      | Returns an array of all users.            |
| GET    | `/users/:Id`              | all users      | Returns information for a single user.    |  
| GET    | `/users/:Id/interests`    | specific user  | Returns list of interests for single user.|
| PUT    | `/users/:Id`              | all users      | Modify an existing user.                  |
| PUT    | `/users/:Id/mentor`       | all users      | Makes existing user a mentor
| POST   | `/users/`                 | all users      | Add a new User.                           |
| POST   | `/users/email`            | all users      | Gets a user by Email value sent.          |
| DELETE | `/users/:Id`              | all users      | Delete a specified user.                  |

### Mentor Routes

| Method | Endpoint                  | Access Control | Description                               |
| ------ | -----------------------   | -------------- | ----------------------------------------- |
| GET    | `/mentors`                | all users      | Returns an array of all mentors.          |
| GET    | `/mentors/:Id`            | all users      | Returns information for a single mentor.  |  
| GET    | `/mentors/:Id/categories` | specific mentor| Returns list of categories for a mentor.  |
| PUT    | `/mentors/:Id`            | mentors        | Modify an existing mentor.                |
| POST   | `/mentors/`               | all users      | Add a new mentor.                         |
| DELETE | `/mentors/:Id`            | mentors        | Delete a specified mentor.                |

### Category Routes

| Method | Endpoint                  | Access Control | Description                               |
| ------ | -----------------------   | -------------- | ----------------------------------------- |
| GET    | `/categories`             | all users      | Returns an array of all categories.                       
| GET    | `/categories/:Id`         | all users      | Returns information for a single category.|
| PUT    | `/categories/:Id`         | mentors        | Modify an existing category.              |
| POST   | `/categories/`            | mentors        | Add a new category.                       |
| DELETE | `/categories/:Id`         | mentors        | Delete a specified category.              |



# Data Models


### User Model

---

```
{
  id: increment INTEGER
  email: STRING
  given_name: STRING
  family_name: STRING
  username: STRING
  location: STRING
  interest_1: STRING
  interest_2: STRING
  interest_3: STRING
  created_at: TIMESTAMP with TIMEZONE
  avatar: BITVARYING
  isMentor: BOOLEAN
  user_bio: TEXT
  user_rating: INTEGER
}
```
### Mentor Model

---

```
{
  id: increment INTEGER
  mentor_id: INTEGER foreign key in USERS table
  mentor_name: STRING
  category_1: STRING
  category_2: STRING
  category_3: STRING
  mentor_rating: INTEGER
  mentor_bio: TEXT
  
}
```
### Category Model

---

```
{
  id: increment INTEGER
  category_name: STRING
  
}
```


 ### mentee_list Model

---

```
{
  user_id: INTEGER foreign key in USERS table
  mentor_id: INTEGER foreign key in MENTORS table
  
}

```

## Actions


## User Actions

`find()` -> Returns all users

`findById(id)` -> Returns a single user by ID

`add(user)` -> Returns the created user

`update(changes, id)` -> Update a user by ID

`remove(id)` -> Delete user by ID


## Mentor actions 

`findMentor()` -> Returns all mentors

`findMentorById(id)` -> Returns a single mentor by ID

`addMentor(mentor)` -> Returns the created mentor

`updateMentor(changes, id)` -> Update a mentor by ID

`removeMentor(id)` -> Delete mentor by ID

## Category actions 

`findCat()` -> Returns all categories

`findCatById(id)` -> Returns a single category by ID

`addCat(cat)` -> Returns the created category

`updateCat(changes, id)` -> Update a category by ID

`removeCat(id)` -> Delete category by ID



## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

* OKTA_ORG_URL
* OKTA_API_TOKEN
* DB_URL
* TEST_URL
    
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

See [Frontend Documentation](https://github.com/Lambda-School-Labs/voice-chatroom-fe/blob/master/README.md) for details on the fronend of our project.

