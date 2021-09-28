// Server Imports
const express = require("express");
const middleware = require("./middleware");

// Router Imports
const authRouter = require("../routers/00-auth/auth-router");
const userRouter = require("../routers/01-users/users-router");
const propertiesRouter = require("../routers/02-properties/properties-router");
const unitsRouter = require("../routers/04-units/units-router");
const leaseTermsRouter = require("../routers/03-leaseterms/leaseterms-router");
const applicationsRouter = require("../routers/06-applications/applications-router");

// Server Setup
const server = express();
middleware(server);

// Simple GET request
server.get("/", (req, res) => {
  console.log("It's alive!");
  res.status(200).json({
    message: "It's alive!",
    documentation: "https://documenter.getpostman.com/view/9339560/SzS2xoju",
  });
});

// Router Setup
server.use("/auth", authRouter);
server.use("/users", userRouter);
server.use("/properties", propertiesRouter);
server.use("/units", unitsRouter);
server.use("/leaseterms", leaseTermsRouter);
server.use("/applications", applicationsRouter);

module.exports = server;
