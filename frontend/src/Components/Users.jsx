import { useState } from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

export function Users({users}){
    return<div >
        
        <div className="font-bold text-lg mt-5">Users</div>
        <div className="my-2">
        <input className=" border rounded border-slate-200 shadow-sm w-full px-2 py-1" type="text" placeholder="Search users..."></input>
        </div>
        <div>
            {users?.map((user)=><User user={user}/>)}
        </div>
        
    </div>
}
function User({user}){
    const Navigate = useNavigate();
    return<div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full bg-slate-200 w-12 h-12 flex justify-center mt-1 mr-2" >
            <div className="text-xl h-full flex flex-col justify-center" >
                {user.firstName[0]}
            </div>
            </div>
            <div className=" flex flex-col justify-center">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>
        <div>
        <Button onClick={()=>{
            Navigate("/send",{
                state:{
                    receiverUserId:user._id,
                    firstName:user.firstName,
                    lastName:user.lastName
                }
            })
        }} color={"bg-gray-800"} hovercolour={"bg-gray-900"} label={"Send Money"}/>
        </div>
    </div>
}