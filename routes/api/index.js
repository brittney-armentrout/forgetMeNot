const router = require("express").Router();
const friendRoutes = require("./friends");
// const giftRoutes = require("./gifts");
// const occasionRoutes = require("./occasions");

//Friend routes
router.use("/friends", friendRoutes);


//!! do we need these or can we somehow roll them all up with the friends router? !!

//Gift routes
// router.use("/gifts", giftRoutes);

//Occasion routes
// router.use("/occasions", occasionRoutes);

module.exports = router;