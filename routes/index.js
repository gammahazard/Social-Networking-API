const router = require("express").Router();
//import all api routes from index
const apiRoutes = require("./api");

// use /api prefix for all routes
router.use("/api", apiRoutes);
// invalid path error
router.use((req, res) => {
  res.status(404).send("<title>404 (Invalid Path Specified)</title>");
});

module.exports = router;
