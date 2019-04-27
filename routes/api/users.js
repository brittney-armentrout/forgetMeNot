const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//Get friends and post friends to DB
router.route("/users")
    //route to get all saved friends
    .get(usersController.findAll);
    console.log("hitting users route");

module.exports = router;
