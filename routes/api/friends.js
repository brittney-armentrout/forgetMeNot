const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

//Get friends and post friends to DB
router.route("/:id")
    //route to get all saved friends
    // .get(friendsController.findAll);
    .get(friendsController.findAll)
    
    //route to add a new friend
router.route("/:id")
    .post(friendsController.create);
    console.log('Save friend route hit! Wooooo!')

// //Matches with "api/friends/:id"
// router 
//     .route("/:id")
//     .get(friendsController.findById)
//     //route to update friend data
//     .put(friendsController.update)
//     //route to delete friend
//     .delete(friendsController.delete)

module.exports = router;