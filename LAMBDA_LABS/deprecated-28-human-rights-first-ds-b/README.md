# Human Rights First, Police Presence Map

    Uniting the world to stand against tyranny.


## Labs28 HRF-B Contributors
- Jazmine McGinnis, Backend Web
- Juan Alvarado-Arguello, Web
- Charlie Lu, Web
- Samuel Brown, Web
- Crystal Dixson, Data Science (Data)
- Jake Dennis, Data Science (ML)
- Robert Sharp, Data Science (API)

### Live API URL
[https://b-ds.humanrightsfirst.dev](https://b-ds.humanrightsfirst.dev/)

### Project Planning
[Team Trello Board](https://trello.com/b/AOaJaAQK/team-b-labs28)

### Data Science API built using:
- FastAPI
- Python
- Docker
- AWS Elastic Beanstalk

### Data Science API
- `/report-by-id/?idx=42` Gets an incident report by index.
- `/report-by-city/?city=Seattle` Gets a list of incident reports by city name.
- `/report-by-state/?state=Oregon` Gets a list of incident reports by state name.
- `/full-report/` Gets the entire dataset in one shot.
- `/reload/` Reloads the data from source.
- `/predict/?text=blob%20of%20text...` Retrieves the predicted rank of a police report by severity.
    - Rank 0: No police Presence
    - Rank 1: Police Presence
    - Rank 2: Empty-hand Force
    - Rank 3: Blunt Force Weapons
    - Rank 4: Chemical & Electric Weapons
    - Rank 5: Lethal Force

### Installation Instructions - Local Development Environment
`$ pip install -r project/requirements.txt`

### Docker Build Command - Local Docker Testing
`$ docker build project -t labs28-hrf`

### Docker Run Command - Local Docker Testing
`$ docker run -p 8000:8000 -it labs28-hrf uvicorn app:api --host 0.0.0.0`

### Docker Remote Server Config
- DO NOT USE `$ docker-compose` locally!
- This file is for remote server configuration only.

### AWS EB Deployment Instructions
```
$ eb init <app name> --platform docker --region us-east-1
$ eb setenv DB_KEY=42 DB_SECRET=314
$ eb create <env name>
$ eb open
```
- eb init: Setup EB to run locally, creates the app
- eb setenv: Sets environment variables for remote server
- eb create: Creates the environment and pushes app to AWS
- eb open: Opens the live app

To update an existing environment with all currently committed changes:
`$ eb deploy`

For more info `$ eb -h` or view the docs online: [EB CLI Commands](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html)
