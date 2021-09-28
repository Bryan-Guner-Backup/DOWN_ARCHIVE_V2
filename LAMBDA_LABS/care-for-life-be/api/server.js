const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// routers 
const communitiesRouter = require('../communities/communities-router.js');
const zoneRouter = require('../zones/zones-router');
const rolesRouter = require('../roles/roles-router');
const familiesRouter = require('../families/families-router');
const surveysRouter = require('../surveys/surveys-router');
const individualsRouter = require('../individuals/individuals-router');
const questionsRouter = require('../questions/questions-router');
const responsesRouter = require('../responses/response-router');
const workersRouter = require('../workers/workers-router');
const surveyRolesRouter = require('../survey_roles/survey-roles-router');
const completedSurveysRouter = require('../completed_surveys/completed-surveys-router');
const authRouter = require('../auth/auth-router');

server.use(express.json());
server.use(helmet());
server.use(cors());
// server.use(logger);

// --- router paths --- //
server.use('/auth', authRouter);
server.use('/api/communities', communitiesRouter);
server.use('/api/zones', zoneRouter);
server.use('/api/roles', rolesRouter);
server.use('/api/families', familiesRouter);
server.use('/api/surveys', surveysRouter);
server.use('/api/individuals', individualsRouter);
server.use('/api/questions', questionsRouter);
server.use('/api/responses', responsesRouter);
server.use('/api/workers', workersRouter);
server.use('/api/surveyRoles', surveyRolesRouter);
server.use('/api/completedSurveys', completedSurveysRouter);


// --- logger middleware --- //
// function logger(req, res, next) {
//     const date = new Date(Date.now());
//     console.log(`METHOD: ${req.method}`);
//     console.log(`URL: ${req.originalUrl}`);
//     console.log(`DATE: ${date.toDateString()}, ${date.toTimeString()}`);
//     next();
// }

server.get("/", (req, res) => {
    res.status(200).json({ api: "running" });
});


module.exports = server;