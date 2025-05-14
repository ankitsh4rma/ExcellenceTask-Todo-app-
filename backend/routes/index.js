const express = require("express");
const router = express.Router();
const signup = require("./signup");
const signin= require("./signin");
const update= require("./update");
const createTodo = require("./createTodo");
const users = require("./users")
const viewTodo = require("./viewTodo");
const editTodo = require("./editTodo");
const deleteTodo = require("./deleteTodo");

router.use("/signup",signup);
router.use("/signin",signin);

router.use("/create",createTodo);
router.use("/view",viewTodo);
router.use("/edit",editTodo);
router.use("/delete",deleteTodo);
module.exports=router;
