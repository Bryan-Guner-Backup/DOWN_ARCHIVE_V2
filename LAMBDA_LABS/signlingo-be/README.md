[![Maintainability](https://api.codeclimate.com/v1/badges/9b3d0af20438824ee812/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/signlingo-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/9b3d0af20438824ee812/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/signlingo-be/test_coverage)

# Sign Lingo

## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview

This database allows users to login, register, and participate in american sign language flashcard lessons, exercises, and quizzes. Currently the only levels available are for the alphabet. <br><br> **Note** <br>If you are going to change the database and push those changes to master, remember to run the following commands in the heroku console: <br> **knex migrate:rollback** <br> **knex migrate:latest** <br> **knex seed:run** <br> You need the seeds ran especially because we store level information here.

- Type **yarn install** to download all deps<br>
- Type **nodemon index.js** to continously run dev env server (you will need to have nodemon installed globally -> "**npm install -g nodemon**"), we were having problems running nodemon locally<br>
- Back end is deployed to production (even thought it says staging in the name) at [Heroku](https://signlingo-staging.herokuapp.com/) <br>
- Data Base Schema is here: [DB SCHEMA](https://dbdesigner.page.link/iEg1SoCNyGXD7KEt6)<br>

## API Endpoints

### Authentication

| Method | Endpoint     | Body/Params (required) | Body (optional) | Notes                                                                                                                      |
| ------ | ------------ | ---------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| POST   | /user/signup | okta access token      | N/A             | Finds user in database via okta_uid, or adds them to the database and initializes their levels. Returns the users okta_uid |

### Authentication Request and Response Body Examples

- **/user/signup** --- POST user request body example (okta access token)

```
{
    "accessToken": {
        "value": "eyJraWQiOiJsaThvR2dYNUNiTXQtcjdCb2ZvQkZUNEY2YlhXNUxyY1hkckRydFd2ME93IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlhyVzBOWGlTYXo3TkdFRkxYLWYtWFpJdThtUy0xUHJ3YkxZQVZkS0ctSUUiLCJpc3MiOiJodHRwczovL2Rldi0xMDcyODkub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTkxOTgyODIxLCJleHAiOjE1OTE5ODY0MjEsImNpZCI6IjBvYWVudG92bUMyemtZeUZaNHg2IiwidWlkIjoiMDB1ZTc4ZWw0T2ZjNEg0N3A0eDYiLCJzY3AiOlsiZW1haWwiLCJwcm9maWxlIiwib3BlbmlkIl0sInN1YiI6ImphY2tzb24ub2dsZXMyOEBnbWFpbC5jb20ifQ.nPiPx5p80dFJpQGLLqGrvALS3qKefuta8wWYpjYBxA0bm_qLICgebJe2jgJxx90LcYMHM6UDvz6DFgBz6JXv38qchY-Mk-rraOAltwL9__o4sN1UU4IoB3_3a5xv5w-ffXqY87zypAXzejGZKHcy7CRurgkMM6J232XN08p8GktG3H1cUf23vJKFsnsPyU5kpEf9CJVwWgluA8ca3Nsuwovfg4cJq5U_FhYHt5OxOOAQe9pKPseKEnfOnMsldqRkcbSsNOony1IYbqzuZMcg40OMLDuifGFGs4AS9inW9Tr8DC6C-EcYJXmwtz6TQDOtMcysis9m4VA1xeCaGNw42g",
        "accessToken": "eyJraWQiOiJsaThvR2dYNUNiTXQtcjdCb2ZvQkZUNEY2YlhXNUxyY1hkckRydFd2ME93IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlhyVzBOWGlTYXo3TkdFRkxYLWYtWFpJdThtUy0xUHJ3YkxZQVZkS0ctSUUiLCJpc3MiOiJodHRwczovL2Rldi0xMDcyODkub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTkxOTgyODIxLCJleHAiOjE1OTE5ODY0MjEsImNpZCI6IjBvYWVudG92bUMyemtZeUZaNHg2IiwidWlkIjoiMDB1ZTc4ZWw0T2ZjNEg0N3A0eDYiLCJzY3AiOlsiZW1haWwiLCJwcm9maWxlIiwib3BlbmlkIl0sInN1YiI6ImphY2tzb24ub2dsZXMyOEBnbWFpbC5jb20ifQ.nPiPx5p80dFJpQGLLqGrvALS3qKefuta8wWYpjYBxA0bm_qLICgebJe2jgJxx90LcYMHM6UDvz6DFgBz6JXv38qchY-Mk-rraOAltwL9__o4sN1UU4IoB3_3a5xv5w-ffXqY87zypAXzejGZKHcy7CRurgkMM6J232XN08p8GktG3H1cUf23vJKFsnsPyU5kpEf9CJVwWgluA8ca3Nsuwovfg4cJq5U_FhYHt5OxOOAQe9pKPseKEnfOnMsldqRkcbSsNOony1IYbqzuZMcg40OMLDuifGFGs4AS9inW9Tr8DC6C-EcYJXmwtz6TQDOtMcysis9m4VA1xeCaGNw42g",
        "expiresAt": 1591986423,
        "tokenType": "Bearer",
        "scopes": [
            "openid",
            "profile",
            "email"
        ],
        "authorizeUrl": "https://dev-107289.okta.com/oauth2/default/v1/authorize",
        "userinfoUrl": "https://dev-107289.okta.com/oauth2/default/v1/userinfo"
    }
}
```

- **/user/signup** --- POST user successful LOGIN response example

```
{
    "foundUser": true,
    "userFound": "Found the user already in users table",
    "foundit": [
        {
            "id": 7,
            "okta_uid": "00ue78el4Ofc4H47p4x6"
        }
    ],
    "okta_uid": "00ue78el4Ofc4H47p4x6"
}
```

### Levels

| Method | Endpoint  | Body/Params (required)                         | Body (optional) | Notes                                                                                                                                                                                                                      |
| ------ | --------- | ---------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | levels/   | N/A                                            | N/A             | Returns all the levels in the database.                                                                                                                                                                                    |
| GET    | levels/:oktaUID | okta_uid in params                             | N/A             | Returns all user_level table data for a particular user via okta_uid passed as param.                                                                                                                                      |
| POST   | levels/:oktaUID | array of level id's to add, okta_uid in params | N/A             | Adds missing levels to user account informed by levels ids inside levels array, and the okta_uid passed as params, this endpoint will only be reached if an old user logs in and is missing newly added levels in database |
| PUT    | levels/flashcard/:levelID   | level_id in params, and okta_uid in req.body      | N/A        | Edits "completed_flashcards" field in the user_levels entry as specified by level_id and okta_uid                                                                                                                                                                                 |
| PUT    | levels/exercise/:levelID | level_id in params, and okta_uid in req.body    | N/A             | Edits "completed_flashcards" field in the user_levels entry as specified by level_id and okta_uid                                                                                                                                      |
| PUT   | levels/quiz/:levelID | level_id in params, and okta_uid in req.body | N/A             | Edits "completed_flashcards" field in the user_levels entry as specified by level_id and okta_uid |

### Levels Request and Response Body Examples

- **/levels** --- GET all levels in database -> successful response example

```
[
    {
        "id": 1,
        "name": "ABCDE"
    },
    {
        "id": 2,
        "name": "FGHIJ"
    },
    {
        "id": 3,
        "name": "KLMNO"
    },
    {
        "id": 4,
        "name": "PQRST"
    },
    {
        "id": 5,
        "name": "UVWXYZ"
    }
]
```

- **/levels/:oktaUID** --- GET all user levels for single user -> successful response example

```
[
    {
        "id": 4,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 1,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 5,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 2,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 6,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 5,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 7,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 3,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 8,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 4,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    }
]
```

- **/levels/:oktaUID** --- POST missing levels to user account (assuming these levels are new to database) -> Successful response body example

```
[
    {
        "id": 24,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 1,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 25,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 2,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 26,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 3,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 27,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 4,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
    {
        "id": 28,
        "okta_uid": "00ue78el4Ofc4H47p4x6",
        "level_id": 5,
        "completed_flashcards": null,
        "completed_exercises": null,
        "completed_quiz": null
    },
]
```

- **/flashcard/:levelID** --- PUT change completed_flashcard field to timestamp instead of null -> successful response example

```
    1
```

- **/exercise/:levelID** --- PUT change completed_flashcard field to timestamp instead of null -> successful response example

```
    1
```

- **/quiz/:levelID** --- PUT change completed_flashcard field to timestamp instead of null -> successful response example

```
    1
```


### Flashcards

| Method | Endpoint  | Body/Params (required) | Body (optional) | Notes                                                   |
| ------ | --------- | ---------------------- | --------------- | ------------------------------------------------------- |
| GET    | /:levelID | level_id in params     | N/A             | Returns all the flashcards in the database by level_id. |

### Flashcards Request and Response Body Examples for level_id 1

- **/flashcards/:levelID** --- GET all flashcards in database -> successful response example

```
[     
      {
        id: 1,
        level_id: 1,
        sign: "A",
        visual: "https://i.postimg.cc/8CfWd09K/A-big.png",
      },
      {
        id: 2,
        level_id: 1,
        sign: "B",
        visual: "https://i.postimg.cc/x14Mz2xN/B-big.png",
      },
      {
        id: 3,
        level_id: 1,
        sign: "C",
        visual: "https://i.postimg.cc/MTkB9Y8W/C-big.png",
      },
      {
        id: 4,
        level_id: 1,
        sign: "D",
        visual: "https://i.postimg.cc/bJQtW2z1/D-big.png",
      },
      {
        id: 5,
        level_id: 1,
        sign: "E",
        visual: "https://i.postimg.cc/gjmZWkJQ/E-big.png",
      },
]
```

## Credits

### Project Manager

[Michael Famurewa](https://github.com/viscountfam)

### Full Stack Devs

[Jackson Ogles](https://github.com/cjogles) <br>
[Natalia Beckstead](https://github.com/NataliaBeckstead) <br>
[Bryan Bilek](https://github.com/bryanbilek) <br>
[Krisda Luengthada](https://github.com/biskoi) <br>

## Environment Variables

ISSUER<br>
DB_ENV<br>

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- As of 5-26-2020 all code is up to date and working 100%.

### Feature Requests

- Adding the ability to allow users to register/login via Google and Facebook.
- Updating schema, I have provided a video and db design in the Signlingo channel.

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

See [Frontend Documentation](https://github.com/Lambda-School-Labs/signlingo-fe/blob/master/README.md) for details on the fronend of our project.
