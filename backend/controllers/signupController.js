const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SignUpSchema = require("../models/signUp");
const accounts= require("../models/accountsSchema");
const {z} = require("zod")
require("dotenv").config();


const signupController = async (req,res)=>{
    const{email,firstName,lastName,password}=req.body;
    if(!email||!firstName||!lastName||!password){
        return res.status(400).json({message:"Provide all required information"})
    }
    const signupBody = z.object({
        email:z.string().email(),
        firstName:z.string(),
        lastName:z.string(),
        password:z.string()
    })
    const {success}=signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({message:"Invalid Input"})
    }
    const existingUser = await SignUpSchema.findOne({
        email:req.body.email,
    })
    if(existingUser){
        return res.status(411).json({message:"This email is already Exist"})
    }
   
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const data= new SignUpSchema(
            {
                email,
                firstName,
                lastName,
                password:hashedPassword
            }
        )
       const user = await data.save();

       await accounts.create({
        userId:user._id,
        balance:1+Math.random()*10000
       })
        const token = await jwt.sign({id:user._id},process.env.JWT_SECRET);
        const { password:_,...safeData}=data._doc;
        return res.status(200).json({safeData,token});
     }
     catch (error) {
        return res.status(500).json({message:"Error occured"})
    }}
    module.exports=signupController;