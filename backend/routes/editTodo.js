const express = require("express");
const router = express.Router();
const editTodo = require("../controllers/editTodo");
const authMiddleware = require("../middlewares/authMiddleware");
console.log("type of authMiddleware",typeof authMiddleware);
router.put("/:id",authMiddleware,editTodo);
module.exports=router;