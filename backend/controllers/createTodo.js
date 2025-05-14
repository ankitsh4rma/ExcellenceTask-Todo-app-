const mongoose = require("mongoose")
const Todo = require("../models/todoSchema");
const { default: errorMap } = require("zod/locales/en.js");
const createTodo = async(req,res)=>{
    const{title,description,category,dueDate}=req.body;
    try{
        const newTodo = new Todo({title,description,category,dueDate});
        await newTodo.save();
        res.status(201).json(newTodo);
    }catch(error){
        res.status(500).json({message:"Error creating todo",error:error.message});
    }
}
module.exports=createTodo