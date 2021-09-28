# Family Promise Service Tracker

[Family Promise](https://familypromise.org/) helps local communities coordinate their compassion to address the root causes of family homelessness. They tap existing local resources to empower families towards economic stability. Families come to them in crisis; they help them rebuild their lives with new skills and ongoing support. They address the issue holistically, providing prevention services before families reach crisis, shelter and case management when they become homeless, and stabilization programs once they have secured housing to ensure they remain independent.

Family Promise needs a way to track and visualize the services they provide external to the shelter to gain actionable insights.

Our goal is to build a generalizable monitoring and evaluation (M&E) platform that meets Family Promise's needs, with an eye toward additional potential use cases that would be useful for many other organizations.


### Back-End Team
| [Trenten Grede](https://github.com/Tgrede) | [Diego Roman ](https://github.com/Diegormnv) | [Remy Vila](https://github.com/RemyVila) | [Declan Casey](https://github.com/declan-casey) | [Anthony Catanzariti](https://github.com/apcatanzariti) |
| --- | --- | --- | --- | --- |
| <img src="https://avatars.githubusercontent.com/u/15914068?s=400&u=0fc67f6a406f42024c30ba12a19778921ab755d4&v=4" width="200" align="center"/> | <img src="https://avatars.githubusercontent.com/u/72019243?v=4" width="200" align="center"/> | <img src="https://avatars.githubusercontent.com/u/71950482?v=4" width="200" align="center"/> | <img src="https://avatars.githubusercontent.com/u/73033132?v=4" width="200" align="center"/> |  <img src="https://avatars.githubusercontent.com/u/74742085?v=4" width="200" align="center"/> |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/trenteng/) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Tgrede) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">]( https://www.linkedin.com/in/diego-roman-743897142/) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Diegormnv) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/remy-vila-657514134/) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RemyVila) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/declan-casey-63bb431bb/) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/declan-casey) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/anthony-catanzariti/) [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/apcatanzariti) |
<br>
<br>

## Status
Current Roadmap in [Notion](https://www.notion.so/Roadmap-Family-Promise-Service-Tracker-Labs-34-cfc13e83f2e849c98056fee3890c9272), all activity tracked in [Trello](https://trello.com/b/48DG97Ae/labs-34-family-promise-service-tracker-team-b).

## Requirements
Details on the Labs Node Scaffolding here: <https://docs.labs.lambdaschool.com/labs-api-strarter/>

Labs teams must follow all [Labs Engineering Standards](https://labs.lambdaschool.com/topics/node-js/).


## Getting Started

### Enviornment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
  - The following ports are whitelisted for use with okta
    - 3000
    - 8000
    - 8080
- `DS_API_URL` - URL to a data science api. (eg. <https://ds-bw-test.herokuapp.com/>)
- `DS_API_TOKEN` - authorization header token for data science api (eg. SUPERSECRET)
- `DEV_DATABASE_URL` - connection string for local postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying okta access tokens. `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the okta client ID.
- `OKTA_ORG_URL` - The base url for the Okta org
- `OKTA_API_TOKEN` - Okta API token

See .env.sample for example values

### Setup postgres

There are 3 options to get postgresql installed locally [Choose one]:

1. Use docker. [Install](https://docs.docker.com/get-docker/) for your platform
    - run: `docker-compose up -d` to start up the postgresql database and pgadmin.
    - NOTE: if the above command does not work, try running it without the -d
    - Open a browser to [pgadmin](http://localhost:5050/) and you should see the Dev server already defined.
    - you will need to login using the `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` from the `docker-compose.yml` file
    - once logged in with those credentials you will need to enter the password 'docker' to access the DB.
    - If you need to start over you will need to delete the folder `$ rm -rf ./data/pg` as this is where all of the server data is stored.
    - if the database `api-dev` was not created then start over.
2. Download and install postgresql directly from the [main site](https://www.postgresql.org/download/)
    - make note of the port, username and password you use to setup the database.
    - Connect your client to the server manually using the values previously mentioned
    - You will need to create a database manually using a client.
    - Make sure to update the DATABASE_URL connection string with the values for username/password, databasename and server port (if not 5432).
3. Setup a free account at [ElephantSQL](https://www.elephantsql.com/plans.html)
    - Sign up for a free `Tiney Turtle` plan
    - copy the URL to the DATABASE_URL .env variable
    - make sure to add `?ssl=true` to the end of this url

### Setup the application

- create your project repo by forking or using this as a template.
- run: `npm install` to download all dependencies.
- run: `cp .env.sample .env` and update the enviornment variables to match your local setup.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

### Additional documentation
- The current API documentation is found in /api/API-README.md
- List of known issues is found in /known-defects.md
- Backend database designs found [here](https://whimsical.com/db-info-4DyAKKuHwr16LrCCejwtev)
