const express = require("express");
const router = express.Router();
const deleteTodo = require("../controllers/deleteTodo");
console.log(typeof deleteTodo)
const authMiddleware = require("../middlewares/authMiddleware");
console.log("type of authMiddleware",typeof authMiddleware);

router.delete("/:id",authMiddleware,deleteTodo);
module.exports=router;