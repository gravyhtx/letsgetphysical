const db = require("../models/Index")


module.exports = function(app) {
  app.post("/workouts", ({ body }, res) => {
    console.log(req)
    
  })
  app.put("/api/workouts/:WorkOutId", (req, res) => {
    db.findone({where: {id: req.params.id}})

    })
}
