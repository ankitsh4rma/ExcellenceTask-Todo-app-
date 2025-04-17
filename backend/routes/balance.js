const express = require("express");
const router = express.Router();
const balanceController = require("../controllers/balanceController.js");
const authMiddleware=require("../middlewares/authMiddleware.js")
router.get("/balance/:id",authMiddleware,balanceController);
module.exports = router;