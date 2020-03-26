const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// routes
require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app