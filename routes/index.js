const express = require("express");
const routes = express();

routes.use("/search", require("./get"));
routes.use("/create", require("./post"));

module.exports = routes;
