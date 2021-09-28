[![Maintainability](https://api.codeclimate.com/v1/badges/f8a81e8d0405db2b5ad4/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/merchos-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/f8a81e8d0405db2b5ad4/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/merchos-be/test_coverage)

# API Documentation

#### Backend delpoyed at [Heroku](https://merchos-be.herokuapp.com/) <br>

## Getting started

To get the server running locally:

1. Clone this repo
2. Enter the downloaded directory
3. Install the dependencies (`yarn install` or `npm install`)
4. Start the development server (`yarn server` or `npm run server`)

### Nodejs/express

- Simplified HTTP server
- Pure Javascript
- NPM access
- Middleware

## Endpoints

#### Auth Routes

| Method | Endpoint         | Access Control | Description      |
| ------ | ---------------- | -------------- | ---------------- |
| POST   | `/auth/register` | all users      | Registers a user |
| POST   | `/auth/login`    | all users      | Logs a user in   |

#### User Routes

| Method | Endpoint       | Access Control | Description      |
| ------ | -------------- | -------------- | ---------------- |
| GET    | `/user/stores` | store owner    | Gets user stores |

#### Store Routes

| Method | Endpoint       | Access Control | Description       |
| ------ | -------------- | -------------- | ----------------- |
| GET    | `/store`       | admin          | Gets all stores   |
| GET    | `/store/:name` | all users      | Gets single store |
| POST   | `/store`       | store owner    | Creates a store   |
| PUT    | `/store/:name` | store owner    | Updates a store   |
| DELETE | `/store/:name` | store owner    | Deletes a store   |

#### Page Routes

| Method | Endpoint    | Access Control | Description    |
| ------ | ----------- | -------------- | -------------- |
| GET    | `/page`     | admin          | Gets all pages |
| PUT    | `/page/:id` | store owner    | Updates a page | \  |


#### Product Routes

| Method | Endpoint                        | Access Control | Description                                 |
| ------ | ------------------------------- | -------------- | ------------------------------------------- |
| GET    | `/products/:store_id`           | store owner    | Gets all products for store with store_id   |
| GET    | `/products/product/:product_id` | store owner    | Gets single product with product_id         |
| DELETE | `/products/product/:product_id` | store owner    | Deletes product with product_id             |

# Data Model

#### ROLES

---

```
{
  id: UUID
  role: STRING
  role_desc: STRING
}
```

#### USERS

---

```
{
  id: UUID
  role_id: UUID foreign key in ROLES table
  username: STRING
  password: STRING
  first_name: STRING
  phone_number: STRING
  account_number: STRING
  routing_number: STRING
  card_number: STRING
  card_exp: STRING
  card_security: STRING
  card_name: STRING
  address_street: STRING
  address_city: STRING
  address_state: STRING
  address_country: STRING
  address_zip: STRING
}
```

#### store

---

```
{
  id: UUID
  store_name: STRING
  store_url: STRING
}
```

#### user_store

---

```
{
  id: UUID
  user_id: UUID foreign key in USERS table
  store_id: UUID foreign key in STORE table
}
```

#### page

---

```
{
  id: UUID
  theme: TEXT
  layout: TEXT
  color: TEXT
}
```

#### store_page

---

```
{
  id: UUID
  store_id: UUID foreign key in STORE table
  page_id: UUID foreign key in PAGE table
}
```

#### component

---

```
{
  id: UUID
}
```

#### page_component

---

```
{
  id: UUID
  page_id: UUID foreing key in PAGE table
}
```

#### product

---

```
{
  id: UUID
  product_id: TEXT
  color: TEXT 
  store_id: UUID foreign key in STORE table
}
```

## Actions

### User Model

`add(user)` -> Adds a user to the database

`addRole(role)` -> Adds a role to the roles table

`findAllRoles()` -> Returns all roles

`findAll()` -> Returns all users

`findBy(filter)` -> Returns a user by certain filter

`findById(id)` -> Returns a user with a specific id

`remove(id)` -> Deletes a user with a specific ID

`checkInUse(username)` -> Checks a user is in db

### Store Model

`find()` -> Returns all stores

`findBy(filter)` -> Returns specific store by certain filter

`add(newStore)` -> Adds a new store

`updateStore(filter, storeData)` -> Updates a store based on a filter

`remove(filter)` -> Deletes a store based on filter

`addUserStore(user_id, store_id)` -> adds a user to associative table

`checkStores(reqStore, userStores)` -> Checks if user owns a store

`constructURI(storename)` -> regex to create a url with a store name

### Store Page Model

`addStorePage(storeData, pageData)` -> Adds to store_page and joins tables

`findStorePage(id)` -> Searches for a specific store page

`storePageObj(data)` -> Object constructor for response

`deleteStore(filter, storeData)` -> Deletes a store

### Page Model

`getPages()` -> Returns all pages

`addPage(page)` -> adds a page to page table

`findBy(filter)` -> finds a page by filter

`updatePage(id, data)` -> updates a page with a certain id

`verifyPage(user_id, page_id)` -> Verify if a user owns a page


### Product Model

`findByStoreId(store_id)`  -> returns all products from store with store_id

`findById(product_id)`  -> returns product with product_id

`add(product)`  -> creates a product in the product table

`remove(product_id)`  -> removes a product from the product table

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

    PORT - Specify a port for server to run on (default: 5000)
    USER - Username for local Postgres server
    PASSWORD - Password for local Postgres server
    DATABASE - Specify database on Postgres server
    JWT_TOKEN - JWT secret for authentication and authorization
    DATABASE_URL - shortened postgres credential url
    LOCAL_BACKEND_URL - Backend url for cors origin
    LOCAL_FRONTEND_URL - Development frontend environment for cors origin
    STAGE_FRONTEND_URL - Staging frontend environment for cors origin
    PROD_FRONTEND_URL - Production frontend environment for cors origin
    SCALABLE_PRESS_API - API for ScalablePress interaction

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

See [Frontend Documentation](https://github.com/Lambda-School-Labs/merchos-fe) for details on the fronend of our project.
