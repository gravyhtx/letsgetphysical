const db = require("../models/Index")

module.exports = function(app) {

  app.get("/exercise", (req, res) => {
    db.Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/stats", (req, res) => {
    db.Stats.find({})
      .then(dbStats => {
        res.json(dbStats);
      })
      .catch(err => {
        res.json(err);
      });
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