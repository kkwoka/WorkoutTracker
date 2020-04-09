const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("/public"));
// app.use('/static', express.static(path.join(__dirname, '/public')));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTrackerdb", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "/Develop/public/style.css"));
// });

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/public/exercise.html"));
});

app.post("")
// app.get("/api/workouts", (req, res) => {
//     db.
//     res.json(// api info );
// })







app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });  