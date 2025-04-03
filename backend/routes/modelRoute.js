const { predictFloodProbability } = require("../controllers/floodController");

const router = require("express").Router();
const predictEarth = require("../controllers/modelController").predictEarth;

router.post("/earthQuake", predictEarth);
router.post("/flood", predictFloodProbability);

module.exports = router;