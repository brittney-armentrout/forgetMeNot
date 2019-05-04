const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passportSetup = require('./config/passport-setup')
require('dotenv').config();
const passport = require('passport');
var cors = require('cors');

// const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

//enable cors
app.use(cors());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Passport Middleware
app.use(passport.initialize());
//Passport Config
require("./config/passport")(passport);

// Define API routes here
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forgetmenot", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
