const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4

const workoutSchema = new Schema({
  // type: {
  //   type: String,
  //   trim: true,
  //   required: true
  // },

  name: { // name of workout
    type: String,
    trim: true, // removes all whitespace
    // required: "String is Required" // Cannot be inserted into database without string
  },

  duration: {
    type: Number,
    // required: true
  },

  weight: {
    type: Number,
    // required: true
  },

  reps: {
    type: Number,
    unique: true,
    // required: true // cannot be inserted into databse without number
  },

  sets: {
    type: Number,
    // required: true
  }
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;