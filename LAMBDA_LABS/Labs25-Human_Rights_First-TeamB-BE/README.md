# Human Rights First - Incidents of Excessive Use of Force by Police

[video presentation](https://youtu.be/4Rk8fbLA0s0)

### Enviornment Variables

- `PORT` - 8000
- `DS_API_URL` - 'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata'

See .env.sample for example values


## Technologies used
   - Node.js
   - Express.js
   - Knex.js
   - PostreSQL
   - CRON Scheduler
   
## Endpoints
### GET
#### returns database as JSON type
---
Example: `get(api.example/api)`
```
ID: exampleIDstring
Event: {
    id: exampleIDstring,
    state: exampleState
    city: exampleCity
    date: exampleTime
    title: exampleTitle
    description: an example at example example happened near example where example example
}
```
## GET Data Science data
run `node axios.js` in the console/terminal

It calls the API and then parses it into json before adding it to the Postgres database on Heroku
---
If the data is NOT a duplicate, the console will log
```
Start
Success
```
Otherwise it will log
```
Start
Failure
Duplicate ID Encountered
```
