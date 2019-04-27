const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

//Get friends and post friends to DB
router.route("/friends")
    //route to get all saved friends
    .get(friendsController.findAll);
    console.log("hitting friends route");
        

//Server route to add new friend to DB
// router.route("/")
//     .post(friendsController.create)

// //Matches with "api/friends/:id"
// router 
//     .route("/:id")
//     .get(friendsController.findById)
//     //route to update friend data
//     .put(friendsController.update)
//     //route to delete friend
//     .delete(friendsController.delete)

module.exports = router;