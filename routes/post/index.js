const express = require("express");
const TVShows = require("../../db/models/showSchema");
const validateRequest = require("../../db/helpers");

const tvShowRequestBody = {
  name: "",
  rating: 0,
  platforms: [],
  genre: "",
};

const routes = express();

// add single show
routes.post("/add-show", async (req, res) => {
  console.log(req);
  const { body } = req;
  const isValidRequest = validateRequest(body, tvShowRequestBody);
  if (isValidRequest) {
    const tvShow = new TVShows({ body });
    await tvShow.save();
    res.status(201).send({ status: "TV show added to db" });
  }
});

routes.post("/add-shows", async (req, res) => {
  const { body } = req;
  const { shows } = body;
  shows.forEach((show) => {
    const isValid = validateRequest(show, tvShowRequestBody);
    if (!isValid) {
      res.status(404).send({ status: "incorrect schema" });
    }
  });
  await TVShows.insertMany(shows, (err, tvShows) => {
    res.status(201).send({ status: "TV shows added to db" });
  });
});

routes.post("/find-by-name", async (req, res) => {
  const tvShow = await TVShows.find({ name: req.body.name }).catch((err) => {
    res.status(401).send({ error: "Error!" });
  });
  res.status(201).send(tvShow);
});

//find that matches params - this is a common function so you can pass more than one value
routes.post("/find", async (req, res) => {
  const { body } = req;

  const tvShows = await TVShows.find({ body }).catch((err) => {
    res.status(401).send({ error: "Error!" });
  });
  res.status(201).send(tvShows);
});

module.exports = routes;
