import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";  
import { useNavigate } from "react-router-dom";
function CreateTodo(){
    const navigate=useNavigate();
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Create Todo</h1>
            <InputBox label={"Title"} placeholder={"Title"}/>
            <InputBox label={"Description"} placeholder={"Description"}/>
            <InputBox label={"Category"} placeholder={"Category"}/>
            <InputBox label={"Due Date"} placeholder={"Due Date"}/>
            <Button color="bg-blue-500" hovercolour="bg-blue-600" label={"Create Todo"} onClick={()=>{
                navigate("/dashboard");
            }}/>
        </div>
    )
}
export default CreateTodo;