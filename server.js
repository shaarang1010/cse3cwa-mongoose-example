const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require("./db");
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

dotenv.config(); // initialize the the env setup

db.connectDB(`${process.env.DATABASE_URL}`)
  .then(async () => {
    app.listen(process.env.SERVER_PORT, () =>
      console.log(`App listening on port ${process.env.SERVER_PORT}!`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
