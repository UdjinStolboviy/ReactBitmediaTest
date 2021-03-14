// Import dependencies
const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");

// Set default port for express app
const PORT = process.env.PORT || 4001;

// Create express app
const app = express();
app.use(cors());
app.use(helmet());
app.use(compression());

app.get("/", function (req, res) {
  res.sendFile(path.normalize(__dirname + "/users.json"));
});

app.get("/statistic", function (req, res) {
  res.sendFile(path.normalize(__dirname + "/users_statistic.json"));
});

// Implement 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something is broken.");
});

// Implement 404 error route
app.use(function (req, res, next) {
  res.status(404).send("Sorry we could not find that.");
});

// Start express app
app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
