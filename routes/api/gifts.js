const router = require("express").Router();
const giftsController = require("../../controllers/giftsController");

router.route("/")
    .post(giftsController.create);
    console.log('Save gift route hit!')
    

module.exports = router;