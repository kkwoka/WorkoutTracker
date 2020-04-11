const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
});

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/Develop/public')));

require("./Develop/routes/api-routes")(app);
require("./Develop/routes/html-routes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });  