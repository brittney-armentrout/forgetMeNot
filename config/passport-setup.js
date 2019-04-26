const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config()
const User = require('../models/user');

passport.use(
  new GoogleStrategy({
    callbackURL:"/auth/google/redirect",
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log(profile);
    console.log("Passport callback function fired!")
    new User({
      username: profile.emails[0].value,
      userID: profile.id
    }).save()
    .then((newUser) => {
      console.log('new user created' + newUser);
    })
  })
)