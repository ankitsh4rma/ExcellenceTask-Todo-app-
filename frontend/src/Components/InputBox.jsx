
export function InputBox({label,placeholder,setName}){
    return <div>
        <div className="text-sm font-medium text-left py-2">
        {label}
        </div>
        <input onChange={e=>{
            setName(e.target.value);
        }} className=" px-2 py-1 border rounded border-slate-200 w-full" type="text" placeholder={placeholder}/>
    </div>
}