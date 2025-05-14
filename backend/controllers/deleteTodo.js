const { default: mongoose } = require("mongoose");
const TodoSchema = require("../models/todoSchema");
const deleteTodo = async(req,res)=>{
    try {
        const {id}=req.params;  
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({message:"not valid id"})
        }
        const objectId=new mongoose.Types.ObjectId(id);
        const response=await TodoSchema.findByIdAndDelete(objectId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
module.exports=deleteTodo;