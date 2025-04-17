const mongoose = require("mongoose");
const SignUpSchema= new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true}
})
module.exports=mongoose.model("SignUpModel",SignUpSchema);