const express = require("express");
const router = express.Router();
const updateController= require("../controllers/updateController")
const authMiddleware= require("../middlewares/authMiddleware")
router.put("/:id",authMiddleware,updateController);
module.exports = router;