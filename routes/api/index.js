const router = require("express").Router();
// const userRoutes = require("./users");
const friendRoutes = require("./friends");
// const giftRoutes = require("./gifts");
// const occasionRoutes = require("./occasions");

//User Routes
// router.use("/users", userRoutes);

//Friend routes
router.use("/friends", friendRoutes);
console.log("hitting friends route");


//!! do we need these or can we somehow roll them all up with the friends router? !!

//Gift routes
// router.use("/gifts", giftRoutes);

//Occasion routes
// router.use("/occasions", occasionRoutes);

module.exports = router;