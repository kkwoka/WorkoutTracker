let Workout = require("../models/workoutModel");
const mongojs = require("mongojs");


module.exports = function(app) {

  // ----------------------------------
  // get Last Workout, #1
  // displaying NaN for seeds but not for new data
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({"day": -1}).limit(1)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
  });

  // ----------------------------------

  // update workout, #2
  // Add Exercise route in api.js --> /api/workouts/:id (Method: PUT)
  app.put("/api/workouts/:id", (req, res) => {
    Workout.collection.updateOne(
      { 
        _id: mongojs.ObjectId(req.params.id) 
      },
      { 
        $push: { 
          exercises: req.body 
        }
      }, 
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          console.log("PUT success: ");
          res.send(data);
        }
      });
    });


    // ----------------------------------


    // insert new workout, #3
    // POST request. New Workout
    app.post("/api/workouts", (req, res) => {
      Workout.create(req.body).then(data => {
        res.json(data);
        console.log("post success");
      }).catch(err => {
        res.send(err);
      });
    });


  // ----------------------------------

  // Workout Range, #4
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(data => {
        res.json(data)
    }).catch(err => {
      res.send(err);
    });
    // google mongo range!
  });


};