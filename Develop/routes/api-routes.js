let Workout = require("../models/workoutModel");

module.exports = function(app) {

  // Add Exercise route in api.js --> /api/workouts/:id (Method: PUT)
  app.put("/api/workouts/:id", (req, res) => {
      Workout.collection.updateOne(
        {_id: req.params.id }, {$push: { exercises: req.body }}, 
        // console.log("req.body: ", req.body),
        console.log("id: ", req.params.id),
        (err, success) => {
          if (err) {
            res.send(err);
          } else {
            console.log("PUT success: ");
            res.json(success);
          }
        });
    });



  // for whatever reason, this works as a POST request.
  // app.put("/api/workouts/:id", (req, res) => {
  //   let addWorkout = [
  //     {
  //       day: new Date().setDate(new Date().getDate()-10),
  //       exercises: [ req.body ]
  //     }
  //   ];
  //   console.log("huuuhh?");
  //     Workout.collection.insert(addWorkout);
  //   });

    
  


  // Create Workout:
  // app.post("/api/workouts", (req, res) => {
  //   // console.log("req.body: ", req.body);
  //   let addWorkout = [
  //     {
  //       day: new Date().setDate(new Date().getDate()-10),
  //       exercises: [ req.body ]
  //     }
  //   ];
  //   // console.log("req: ", req);
  //     // console.log("Addworkout: ", addWorkout)
  //     console.log("POST Success");
  //     Workout.collection.insert(addWorkout);
  //   });







// --------------------------------------------------------------

  // Last workout
  // displaying NaN
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({"day": -1}).limit(1)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
  });

  // Wourkout Range
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(data => {
        // console.log(JSON.stringify(data));
        res.json(data)
    }).catch(err => {
      res.send(err);
    });
    // google mongo range!
  });


};