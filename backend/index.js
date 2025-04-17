const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const mainRoute=require("./routes")
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/api/v1",mainRoute);
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Mongo Connected")
}).catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log("Server Started")
})