import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";

function EditTodo(){
    const navigate=useNavigate();
    const Location=useLocation();
    const {id}=Location.state;
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[category,setCategory]=useState("");
    const[dueDate,setDueDate]=useState("");
    useEffect(()=>{
        const fetchTodo=async()=>{
            const response=await axios.get(`http://localhost:3000/api/v1/todos/${id}`);
            setTitle(response.data.title);
            setDescription(response.data.description);
        }
    },[])
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Edit Todo</h1>
            <InputBox label={"Title"} placeholder={"Title"} setName={setTitle}/>
            <InputBox label={"Description"} placeholder={"Description"} setName={setDescription}/>
            <InputBox label={"Category"} placeholder={"Category"} setName={setCategory}/>
            <InputBox label={"Due Date"} placeholder={"Due Date"} setName={setDueDate}/>
            <Button color="bg-blue-500" hovercolour="bg-blue-600" label={"Edit Todo"}/>
        </div>
    )
}
export default EditTodo;