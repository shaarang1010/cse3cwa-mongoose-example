const routes = require("express").Router();
const TVShows = require("../../db/models/showSchema");
const validateRequest = require("../../db/helpers");

const tvShowRequestBody = {
  name: "",
  rating: 0,
  platforms: [],
  genre: "",
};

// add single show
routes.post("/add-show", (req, res) => {
  const { body } = req;
  const isValidRequest = validateRequest(body, tvShowRequestBody);
  if(isValidRequest){
      const tvShow = new TVShows({ body });
      await tvShow.save();
      res.status(201).send({ "status": "TV show added to db"});
  }
});


routes.post("/add-shows", async (req, res)=>{
    const { body } = req;
    const { shows } = body;
    shows.forEach((show)=>{
        const isValid =  validateRequest(show, tvShowRequestBody);
        if(!isValid){
            res.status(404).send({ "status": "incorrect schema"});
        }
    })
    await TVShows.insertMany(shows, (err, tvShows)=>{
      res.status(201).send({ "status": "TV shows added to db"});

    })
})

module.exports = routes;