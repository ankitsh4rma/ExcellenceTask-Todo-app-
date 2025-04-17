import { Link } from "react-router-dom"
export function BottomWarning({text,buttonText,to}){
    return<div className="flex justify-center py-2 text-sm">
        <div>{text}</div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to} >{buttonText}</Link>
    </div>
}