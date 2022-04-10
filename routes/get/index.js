const express = require("express");
const TVShows = require("../../db/models/showSchema");

const routes = express();

// Get all shows
routes.get("/shows", async (req, res) => {
  await TVShows.find({}, (err, shows) => {
    res.send(shows);
  });
});

routes.get("/", async (req, res) => {
  res.status(201).send({ status: "Working!" });
});

//get show by name in url param
routes.get("/show/:name", async (req, res) => {
  await TVShows.find({ name: req.params.name }, (err, show) => {
    res.send(show);
  });
});

module.exports = routes;
