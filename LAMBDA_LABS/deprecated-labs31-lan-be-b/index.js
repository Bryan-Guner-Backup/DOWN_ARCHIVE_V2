const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const passportSetup = require('./config/passportSetup');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const config = require('./database/dbConfig');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');
const roleRouter = require("./routes/roles");
const roomsRouter = require("./routes/room");
const app = express();

const FRONTEND_URL = process.env.FRONTEND_DEPLOYED_URL || 'http://localhost:3000';
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.use(
    cors({
        credentials: true,
        origin: FRONTEND_URL
    })
);
app.use(
    session({
        // name: 'LAN',
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            secure: false
            // Set to true once in production
            // Set to false in local development
        },
        store: new knexSessionStore({
            knex: config
        })
    })
);
app.use(passport.initialize());
app.use(passport.session());

//for local images
app.use(express.static("public"));

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/comment', commentRouter);
app.use("/api/roles", roleRouter);
app.use("/api/room", roomsRouter);

app.get('/', (request, response) => response.send({ message: 'Server working!' }));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));