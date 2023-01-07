const express = require("express");
const feedbackController = require("../controllers/feedbackController");
const router = express.Router();
router.post("/details", feedbackController.details);

module.exports = router;
