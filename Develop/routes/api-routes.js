// const app = express();
// const router = require("express").Router();

// let db = require("../models");
let Workout = require("../models/workoutModel");

module.exports = function(app) {


  // app.put("/api/workouts/:id", (req, res) => {
  //     Workout.create(req.body);
  //     console.log(req.body)
  //     res.json();
  //   });
    
  // app.get("/api/workouts", (req, res) => {
  //   Workout.find({}, (err, data) => {
  //     if (err) {
  //       res.send(err)
  //     } else {
  //       res.json(data)
  //     }
  //   });
  // });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(data => {
        console.log(JSON.stringify(data));
        res.json(data)
    }).catch(err => {
      res.send(err);
    });
    // google mongo range!
  });

  app.post("api/workouts", (req, res) => {
    console.log(req.body)
    res.send("Success!");
  });
};