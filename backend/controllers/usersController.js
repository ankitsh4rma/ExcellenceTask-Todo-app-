const mongoose = require("mongoose");
const SignUpSchema = require("../models/signUp")

const users=async(req,res)=>{
   
try {
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({message:"not valid id"})
        }
        const objectId= new mongoose.Types.ObjectId(id);
        const response = await SignUpSchema.find({
            _id:{$ne:objectId}
        },'firstName lastName _id')
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Erroe ocurred"})
    }
    
}
module.exports = users