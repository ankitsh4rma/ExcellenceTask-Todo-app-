const express = require("express");
const router = express.Router();
const createTodo = require("../controllers/createTodo.js");
const authMiddleware=require("../middlewares/authMiddleware.js ")
console.log("type of authMiddleware",typeof authMiddleware);
console.log("type of createTodo",typeof createTodo);
router.post("/",authMiddleware,createTodo);
module.exports = router;