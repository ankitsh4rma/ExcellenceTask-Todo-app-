const express = require("express");
const router = express.Router();
const signup = require("./signup");
const signin= require("./signin");
const update= require("./update");
const balance=require("./balance");
const transfer = require("./transfer")
const users = require("./users")

router.use("/signup",signup);
router.use("/signin",signin);
router.use("/update",update);
router.use("/account",balance);
router.use("/account",transfer)
router.use("/users",users)
module.exports=router;
