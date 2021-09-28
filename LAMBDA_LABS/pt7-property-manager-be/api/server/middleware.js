const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

function middleware(server) {
  server.use(helmet());
  server.use(cors());
  server.use(express.json());
}

module.exports = middleware;
