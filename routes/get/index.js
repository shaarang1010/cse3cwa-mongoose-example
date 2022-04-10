const routes = require("express").Router();
const TVShows = require("../../db/models/showSchema");

// Get all shows
routes.get("/", async (req, res) => {
  await TVShows.find({}, (err, shows) => {
    res.send(shows);
  });
});

//get show by name in url param
routes.get("/show/:name", async (req, res) => {
  await TVShows.find({ name: req.params.name }, (err, show) => {
    res.send(show);
  });
});

module.exports = routes;
