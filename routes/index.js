const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth/google");
const apiRoutes = require("./api"); //added


//API routes
router.use("/auth", authRoutes);
router.use("/api", apiRoutes); //changed

//If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;