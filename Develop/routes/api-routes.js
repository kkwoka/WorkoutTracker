// const app = express();
// const router = require("express").Router();

// let db = require("../models");
let Workout = require("../models/workoutModel");

module.exports = function(app) {


  // add exercise route in api.js --> /api/workouts/:id (Method: PUT)
  app.put("/api/workouts/:id", (req, res) => {
    let addWorkout = [
      {
        day: new Date().setDate(new Date().getDate()-10),
        exercises: [ req.body ]
      }
    ];
      Workout.collection.insert(addWorkout);
    });
    
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
        // console.log(JSON.stringify(data));
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