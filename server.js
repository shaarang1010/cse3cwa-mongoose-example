const express = require("express");
const bodyParser = require("body-parser");
import mongoose from "mongoose";
const app = express();

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.SEVER_PORT}!`)
  );
});
