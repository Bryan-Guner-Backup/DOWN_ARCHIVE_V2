const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const server = express();
const authorized = require('../auth/auth-middleware');

const authRouter = require("../auth/auth-router");
// const userRouter = require('../router/users/users-router');
const mentorRouter = require("../router/mentors/mentor-router");
const menteeRouter = require("../router/mentees/mentees-router");
const conversationRouter = require('../router/conversations/conversation-router');


server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/conversation', conversationRouter);
server.use('/api/mentee', authorized, menteeRouter);
server.use('/api/mentor', authorized, mentorRouter);
// server.use('/api/admin', authorized, userRouter); //not created for RC2
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send(`My Mentor API`)
});


server.get('/token', (req, res) => {
  
  const payload = {
    subject: 'thisuser',
    userid: 'user.id',
  };

  const secret = 'wombat';
  const options = {
    expiresIn: '1h'
  };

  const token = jwt.sign(payload, secret, options);

  res.json(token);
});


module.exports = server;