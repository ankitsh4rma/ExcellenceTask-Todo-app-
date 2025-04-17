import { Link } from "react-router-dom"


const TransferSuccessful=()=>{
return<div className="flex justify-center">
    <div className="flex flex-col justify-center h-screen mb-10">
       <div className=" flex justify-center">
        <div className="bg-green-500 rounded-full w-40 h-40 flex justify-center  mb-5">
            <div className="flex flex-col justify-center text-8xl ">
                ✓
            </div>
        </div>
        </div>
        <div className="font-bold text-xl">Transaction Completed Sucessfully!!</div>
        <Link className="pointer underline pl-1 cursor-pointer text-center" to={"/dashboard"}>Back to the Dashboard</Link>
        
    </div>
</div>

}
export default TransferSuccessful;