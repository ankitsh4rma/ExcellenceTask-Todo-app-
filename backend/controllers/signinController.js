const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const SignUpSchema = require("../models/signUp")
require("dotenv").config();

const signinController =  async (req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({message:"provide required credentials"})
    }
    try{
        const user = await SignUpSchema.findOne({email})
        if(!user){
            return res.status(404).json({message:"User doesnt exist please SignUp first"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(500).json({message:"Incorrect password!!"})
        }
        const token = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
        const {password:_,...safeUser}=user._doc;
        return res.status(200).json({safeUser,token})
    }catch(err){
        return res.status(401).json({message:"Server Error"})
    }
 }
 module.exports=signinController;