const { default: mongoose } = require("mongoose");
const TodoSchema = require("../models/todoSchema");
const viewTodo=async(req,res)=>{
    try {
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({message:"not valid id"})
        }
        const objectId=new mongoose.Types.ObjectId(id);
        const response=await TodoSchema.findById(objectId);
        if(response.role==="user"){
            return res.status(200).json(response);
        }else{
            const response=await TodoSchema.find();
            return res.status(200).json(response);
        }
        } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
module.exports=viewTodo;