const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config()
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })
});

passport.use(
  new GoogleStrategy({
    callbackURL:"/auth/google/redirect",
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    //Check if user already exists
    User.findOne({username: profile.emails[0].value}).then((currentUser) => {
      if(currentUser){
        //already have a user
        console.log('Current user is: ' + currentUser);
        done(null, currentUser);
      } else {
        //create user in DB
        new User({
          username: profile.emails[0].value,
          userID: profile.id
        }).save()
        .then((newUser) => {
          console.log('new user created' + newUser);
          done(null, newUser);
        });
      }
    });
    
  })
)