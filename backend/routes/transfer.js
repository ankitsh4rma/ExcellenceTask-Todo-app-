const express = require("express");
const router = express.Router();
const transfer = require("../controllers/transferController");
const authMiddleware = require("../middlewares/authMiddleware")
router.post("/transfer",authMiddleware,transfer)
module.exports = router;