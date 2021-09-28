const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const userRouter = require('./api/user/userRouter');
const recRouter = require('./api/recognition/recRouter');
const badgeRouter = require('./api/recognition/badgeRouter');
const auth = require('./middleware/authMiddleWare');
const profileRouter = require('./api/profile/profileRouter');
const picRouter = require('./api/profile-pic/picRouter');
const liveFeedRouter = require('./api/livefeed/liveFeedRouter');
const reactionRouter = require('./api/reactions/reactionRouter');
const commentRouter = require('./api/reactions/commentRouter');
const organizationRouter = require('./api/organization/organizationRouter');
const employeeRouter = require('./api/employee/employeeRouter');
const csvUploadRouter = require('./api/csv/csvUploadRouter');
const reportRouter = require('./api/reports/reportRouter');
const teamRouter = require('./api/teams/teamRouter');

// Global MiddleWare
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(helmet());
server.use(cors());
server.use('/badges', badgeRouter);

server.use(auth.validateToken);

server.use('/teams', teamRouter);
server.use('/reports', reportRouter);
server.use('/users', userRouter);
server.use('/csv', csvUploadRouter);
server.use('/employees', employeeRouter);
server.use('/organizations', organizationRouter);
server.use('/profile', profileRouter);
server.use('/profile-pic', picRouter);
server.use('/feed', liveFeedRouter);
server.use('/rec', auth.validateId, recRouter);
server.use('/comments', auth.validateId, commentRouter);
server.use('/reactions', auth.validateId, reactionRouter);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'API is Running!' });
});

module.exports = server;
