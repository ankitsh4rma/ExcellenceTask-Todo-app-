import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
export function SendMoneyComponent({red}){
    const Navigate = useNavigate();
       const [amount,setAmount]=useState(0)
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        const Location=useLocation();
        const {receiverUserId,firstName,lastName}=Location.state;
        console.log(receiverUserId,firstName,lastName,token,user);
     async function onClick(){
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer",
                {
                fromUserId:user._id,
                toUserId:receiverUserId,
                amount:amount
            } ,  {
                headers:{
                    Authorization: `Bearer ${token}`
                        }
                }
             )
             console.log(response.data.complete);
             if(response.data.complete){
                Navigate("/transactionstatus")
             }
        }
        
        
    
    
    

    return<div className="flex flex-col items-center justify-center bg-slate-200 h-screen">
        <div className="w-100 h-90 bg-white shadow-2xl rounded-sm " >
        <div className="flex flex-col px-10 h-100">
            <div className=" text-center my-15 " >
            <div className="text font-bold text-3xl ">Send Money</div>
            </div>
            <div className=" h-50" >
                <div className="flex ">
                    <div className="rounded-full bg-green-500 w-12 h-12 flex justify-center">
                        <div className="text text-white text-2xl h-full flex flex-col justify-center ">
                        {firstName[0]}
                        </div>
                        </div>
                    <div className="flex flex-col justify-center text font-bold text-2xl ml-2">
                        {firstName} {lastName}</div>
                </div>
                <div className="font-bold">Amount (in Rs)</div>
                <div className="my-3">
                    <input onChange={e=>{
                        setAmount(e.target.value)
                    }} className="border w-full rounded-sm border-slate-200" type="number" id="amount" placeholder="Enter amount"></input>
                </div>
                <div>
                    <Button onClick={onClick} color={"bg-green-500"} label={"Initiate Transfer"}/>
                </div>
            </div>
        </div>
       
        </div>
    </div>
}