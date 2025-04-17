import { useEffect, useState } from "react";
import axios from "axios";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { SubHeading } from "../Components/SubHeading";
import { useNavigate} from "react-router-dom";

function SignUp(){
        const[email,setEmail]=useState("");
        const[firstName,setFirstName]=useState("");
        const[lastName,setLastName]=useState("");
        const[password,setPassword]=useState("");
        const navigate= useNavigate();
    return<div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4" >
       
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox setName={setFirstName} label={"First Name"} placeholder={"Ankit"}/>
            <InputBox setName={setLastName} label={"Last Name"} placeholder={"Sharma"}/>
            <InputBox setName={setEmail} label={"Email"} placeholder={"ankitsharma@example.com"}/>
            <InputBox setName={setPassword} label={"Password"} placeholder={"123456"}/>
            <div className="pt-4"><Button onClick={async()=>{
                const response= await axios.post("http://localhost:3000/api/v1/signup",{
                    email:email,
                    firstName:firstName,
                    lastName:lastName,
                    password:password
                });
                
                console.log(response.data.safeData)
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.safeData))
                navigate("/dashboard")
                
            }}  color={"bg-gray-800"} hovercolour={"bg-gray-900"} label={"SignUp"}/></div>
            
            <BottomWarning text={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            
        </div>
    </div>
    </div>
}
export default SignUp;