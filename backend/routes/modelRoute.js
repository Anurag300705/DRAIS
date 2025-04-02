const router = require("express").Router();
const predictEarth = require("../controllers/modelController").predictEarth;

router.post("/earthQuake", predictEarth);

module.exports = router;