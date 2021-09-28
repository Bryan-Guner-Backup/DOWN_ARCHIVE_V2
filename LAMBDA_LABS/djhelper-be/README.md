# DJ-Helper API Documentation

[![Maintainability](https://api.codeclimate.com/v1/badges/ddd6e13e9136c40345b9/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/djhelper-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ddd6e13e9136c40345b9/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/djhelper-be/test_coverage)

#### This backend is deployed at [https://dj-helper-be.herokuapp.com](https://dj-helper-be.herokuapp.com)

#### (Frontend deployed at [dj-helper.com](https://dj-helper.com))

## Getting started



To get the server running locally:

- Clone this repo
- `npm i` to install all required dependencies
- `npm server` to start the local server
- `npm test` to start server using testing environment

The server requires a PostgreSQL database to be running and configured in a `.env` file (details below).

### Framework Details

- NodeJS: The entire API is built in JavaScript.
- npm: The Node Package Manager - manages all project components.
- Express: Simple API server package for NodeJS
- Knex: Database interface. Easily adaptable for different database variants.
- PostgreSQL: Open source relational database.

## Endpoints

#### Endpoint to Vote

| Method | Endpoint         | Access Control | Description   |
| ------ | ---------------- | -------------- | ------------- |
| POST   | `/api/auth/vote` | none           | Authenticated |

{
"trackId": 3
}

#### Add and Get Playlist

| Method | Endpoint                               | Access Control | Description   |
| ------ | -------------------------------------- | -------------- | ------------- |
| GET    | `/api/event/:eventId/playlist`         | none           | Public Open   |
| DELETE | `/api/auth/track/playlist/:playlistId` | none           | Authenticated |

#### Add and Get Track

| Method | Endpoint                        | Access Control | Description   |
| ------ | ------------------------------- | -------------- | ------------- |
| GET    | `/api/event/:eventId/tracks`    | none           | Public Open   |
| POST   | `/api/track/`                   | none           | Public Open   |
| DELETE | `/api/auth/track/:trackId`      | none           | Authenticated |
| POST   | `/api/auth/track/move/:trackId` | none           | Authenticated |

# JSON Format for adding Track from search for POSTING `/api/track/`

{
spotify_id: spotify_id,
name: song_name,
artist_name: artist_name,
url: external_urls,
isExplicit: explicit,
preview: preview,
img: image,
event_id: eventId
};

#### Predict Track

| Method | Endpoint              | Access Control | Description |
| ------ | --------------------- | -------------- | ----------- |
| GET    | `/predict/:spotifyId` | none           | Public Open |

\*replace "spotifyId" with the track id from spofity track

#### Search Track

| Method | Endpoint             | Access Control | Description |
| ------ | -------------------- | -------------- | ----------- |
| GET    | `/api/tract/:search` | none           | Public Open |

\*replace "search" with song or artist name

#### Onboarding Routes

These routes do **_not_** require a JSON token in the header.

| Method | Endpoint          | Access Control | Description                  |
| ------ | ----------------- | -------------- | ---------------------------- |
| POST   | `/login/dj`       | none           | Login for an existing DJ.    |
| POST   | `/login/guest`    | none           | Login for an existing guest. |
| POST   | `/register/dj`    | none           | Create a new DJ.             |
| POST   | `/register/guest` | none           | Create a new guest.          |

#### Public Information Routes

These routes do **_not_** require a JSON token in the header.
| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| GET | `/dj/:id` | none | Get _public_ information about a DJ. |
| GET | `/djs` | none | Get list of all DJs (public info). |
| GET | `/event/:id` | none | Get _public_ information about an event. |
| GET | `/events` | none | Get list of all events (public info). |


#### DJ Routes

| Method | Endpoint       | Access Control | Description                  |
| ------ | -------------- | -------------- | ---------------------------- |
| GET    | `/auth/dj/:id` | DJs            | Returns _all_ info for a DJ. |
| PUT    | `/auth/dj/:id` | DJs            | Updates a DJ's info.         |
| DELETE | `/auth/dj/:id` | DJs            | Deletes a DJ.                |

#### Event Routes

| Method | Endpoint          | Access Control | Description                   |
| ------ | ----------------- | -------------- | ----------------------------- |
| GET    | `/auth/event/:id` | DJs            | Gets _all_ info for an event. |
| POST   | `/auth/event/:id` | DJs            | Adds a new event.             |
| PUT    | `/auth/event/:id` | DJs            | Modifies an event.            |
| DELETE | `/auth/event/:id` | DJs            | Deletes an event.             |

# Data Model

#### DJs

---

```
{
  id: INTEGER
  username: STRING
  password: STRING
  name: STRING
  email: STRING
  phone: STRING
  website: STRING
  bio: STRING
  profile_pic_url: STRING
}
```

#### Events

---

```
{
  id: INTEGER
  dj: INTEGER
  event_name: STRING
  address: STRING
  email: STRING
  phone: STRING
  map_url: STRING
  start_time: DATETIME (or int)
  end_time: DATETIME (or int)
  venue_url: STRING
  venue_phone: STRING
}
```

#### Guests (not yet implemented)

---

```
{
  id: INTEGER
  username: STRING
  password: STRING
  email: STRING
}
```

## Actions

#### DJs

`getAllDJs` -> Returns array of all DJs

`addDJ` -> Create a DJ. Returns new DJ, including ID.

`findBy` -> Filter list of DJs by any field. Returns array.

`findDJById` -> Returns DJ matching ID field.

`updateDJ` -> Updates DJ info. Returns new DJ object.

`removeDJ` -> Deletes a DJ. Returns 0 or 1.

#### Events

`getAllEvents` -> Returns array of all events.

`findEventById` -> Returns event matching ID.

`addEvent` -> Adds an event. Returns new event, including ID.

`updateEvent` -> Updates event details. Returns modified event.

`removeEvent` -> Deletes event. Returns 0 or 1.

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a `.env` file that includes the following:

```
PORT - optional port number for this app. Defaults to 8000.
USE_HTTPS - set to "true" if using https. Place SSL/TLS certificate under /cert. (Note: Not applicable to the current hosting environment.)

DB_HOSTNAME - e.g. "localhost".
PG_DATABASE_NAME - Name of the database.
PG_PORT - Postgres port number. Defaults to 5432.
PG_USER - Postgres database username.
PG_PASSWORD - Postgres database user's password.
```

TODO:

- Separate variables for development, staging, test, and production.
- Add these fields:
  - JWT\*SECRET - you can generate this by using a python shell and running
  ````py
  import random
  .join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-\_=+)') for i in range(50)])```
  ````

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

See [Frontend Documentation](https://github.com/Lambda-School-Labs/djhelper-fe) for details on the frontend of this project.
