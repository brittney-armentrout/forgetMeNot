const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

//Get friends and post friends to DB
router.route("/")
    //route to get all saved friends
    .get(friendsController.findAll)

//Server route to add new friend to DB
router.route("/")
    .post(friendsController.create)

//Matches with "api/friends/:id"
router 
    .route("/:id")
    .get(friendsController.findById)
    //route to update friend data
    .put(friendsController.update)
    //route to delete friend
    .delete(friendsController.delete)

module.exports = router;