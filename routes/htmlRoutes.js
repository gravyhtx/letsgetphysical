const db = require("../models/Index")

const path = require("path")

module.exports = function(app) {

  app.get("/", (req, res) => {
    res.sendfile (path.join(__dirname, "..public/index.html"))
  });

  app.get("/stats", (req, res) => {
    res.sendfile (path.join(__dirname, "..public/stats.html"))
  });

  app.get("/exercise", (req, res) => {
    res.sendfile (path.join(__dirname, "..public/exercise.html"))
  });

  app.get("/exercise?", (req, res) => {
    res.sendfile (path.join(__dirname, "..public/exercise.html"))
  });


  app.get("/populatedb", (req, res) => {
    db.User.find({})
      .populate("exercises")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  })
}