const express = require("express");

const configMdlware = require("./config/middleware");
const error = require("./common/error");
const zoosRoute = require("./zoos/zoosRoute");

const server = express();
configMdlware(server);

server.get("/", (req, res) => {
  res.send("Welcome to DB-Zoos API");
});

server.use("/zoos", zoosRoute);

server.use(error);

module.exports = server;
