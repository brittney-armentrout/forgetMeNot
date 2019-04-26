const router = require("express").Router();

router.get("/logout", (req, res) => {
  //handle with passport
  console.log("logout route hit")
})

router.get("/google", (req, res) => {
  //handle with passport
  console.log("google route hit")
})

module.exports = router;