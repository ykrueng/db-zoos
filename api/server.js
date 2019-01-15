const express = require("express");

const configMdlware = require("./config/middleware");
const error = require("./common/error");
const zoosRoute = require("./zoos/zoosRoute");
const bearsRoute = require("./bears/bearsRoute");

const server = express();
configMdlware(server);

server.get("/", (req, res) => {
  res.send("Welcome to DB-Zoos API");
});

server.use("/zoos", zoosRoute);
server.use("/bears", bearsRoute);

server.use(error);

module.exports = server;
