
export function Balance({balance}){
    return<div className="flex flex-col justify-center mt-6">
            <div className="flex">
            <div className="text font-bold text-lg ">Your Balance</div>
            <div className="font-semibold text-lg ml-4">Rs {balance}</div>
            </div>
        </div>
    
}