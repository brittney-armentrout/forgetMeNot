const router = require("express").Router();
const passport = require('passport');
require('dotenv').config()

//auth logout
router.get("/logout", (req, res) => {
  //handle with passport
  console.log("logout route hit")
})

// auth with google
router.get("/google", passport.authenticate('google', {
  scope: ['profile', 'email']
}))

//callback for google to redirect to
router.get("/google/redirect", passport.authenticate('google'), (req, res) => {
  // res.send(req.user)
  //redirect to main page here.
})

module.exports = router;