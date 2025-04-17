import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { InputBox } from "../Components/InputBox";
import SignInHeading from "../Components/SignInHeading";
import { SubHeading } from "../Components/SubHeading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignIn(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const Navigate = useNavigate();
    async function onClick(){
            const response =  await axios.post("http://localhost:3000/api/v1/signin",{
                email:email,
                password:password
            })
            console.log(response);
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("user",JSON.stringify(response.data.safeUser))
            Navigate("/dashboard");
    }
    return<div className="bg-gray-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-center p-2 h-max px-4">
               <SignInHeading  label={"SignIn"}/> 
               <SubHeading label={"Enter your credentials to access you account"}/>
               <InputBox setName={setEmail} label={"Email"} placeholder={"ankitsharma@example.com"}/>
               <InputBox setName={setPassword} label={"Password"}/>
               <div className="pt-4">
               <Button onClick={onClick} color={"bg-gray-800"} hovercolour={"bg-gray-900"} label={"Sign In"}/>
               </div>
               
               <BottomWarning text={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}
export default SignIn;