import { useEffect, useState } from "react";
import { AppBar } from "../Components/AppBar";


import axios from "axios";

 function  Dashboard(){
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
        const fetchTodos=async()=>{
            const response=await axios.get("http://localhost:3000/api/v1/todos");
            setTodos(response.data);
        }
    },[])
    return(
        <div>
            <AppBar/>
            <div></div>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <h1>Todo List</h1>
                </div>
            </div>
        </div>
    )
 }
export default Dashboard;