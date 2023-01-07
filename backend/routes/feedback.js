const express = require("express");
const feedbackController = require("../controllers/feedbackController");
const router = express.Router();

router.post("/details", feedbackController.details);
router.post("/getusers", feedbackController.getusers);
router.post("/deleteusers", feedbackController.deleteusers);
router.post("/adminlogin", feedbackController.adminlogin);

module.exports = router;
