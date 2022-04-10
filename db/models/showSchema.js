const mongoose = require("mongoose");
const { Schema } = mongoose;

const showSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    platforms: {
      type: [String],
      required: true,
    },
  },
  {
    genre: {
      type: String,
      required: true,
    },
  }
);

const TVShow = mongoose.model("TVShow", showSchema);

module.exports = TVShow;
