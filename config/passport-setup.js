const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config()

passport.use(
  new GoogleStrategy({
    callbackURL:"/auth/google/redirect",
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log(profile);
    console.log("Passport callback function fired!")
  })
)