const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Imports from codebase
const authenticate = require('./middleware/auth-middleware.js');
const publicRouter = require('./data/routers/publicRouter.js');
const authRouter = require('./data/routers/authRouter.js');
const registerRouter = require('./data/routers/registerRouter.js');
const loginRouter = require('./data/routers/loginRouter.js');

const server = express();

// Middleware
server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());

// Welcome message
server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the DJ Helper backend.' });
});

// Routes
server.use('/api', publicRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/auth', authenticate, authRouter);

// Exports
module.exports = server;
