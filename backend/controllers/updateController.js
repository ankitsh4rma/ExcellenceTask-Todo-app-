const SignUpSchema = require("../models/signUp");


const updateController = async(req,res)=>{
    try {
        if(req.body.password){
            return res.json({message:"password changes doesnt allowed"})
        }
        const updatedUser = await SignUpSchema.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedUser){
           return res.status(401).json({message:"user not found"});
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
       return res.status(500).json({message:"Server error"})
    }
   
 }
 module.exports = updateController;