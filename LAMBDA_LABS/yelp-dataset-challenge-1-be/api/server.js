const express = require("express");
const configureMiddleware = require('../helpers/config/serverSetup');
const authRouter = require('./routes/authRouter');
// const actionsRouter = require('./routes/actionsRouter');
// const usersRouter = require('./routes/usersRouter');

const server = express();
configureMiddleware(server);

server.use('/api', authRouter);
// server.use('/api/actions', actionsRouter);
// server.use('/api/users', usersRouter)

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Server running...." });
});

module.exports = server