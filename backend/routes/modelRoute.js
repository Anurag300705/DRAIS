const { predictFloodProbability } = require("../controllers/floodController");
const { predictWildfireBurnArea } = require("../controllers/wildlifeController");

const router = require("express").Router();
const predictEarth = require("../controllers/modelController").predictEarth;

router.post("/earthQuake", predictEarth);
router.post("/flood", predictFloodProbability);
router.post("/wildfire", predictWildfireBurnArea);

module.exports = router;