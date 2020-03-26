const db = require("../models/Index")


module.exports = function(app) {
  app.post("/submit", ({ body }, res) => {
    db.Exercise.create(body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
}
