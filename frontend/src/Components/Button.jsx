
export function Button({label,color,hovercolour,onClick}){
    return<button onClick={onClick} className={`${color} w-full text-white hover:${hovercolour} focus:outline-none focus:ring-4 focus:ring-gray-300 front-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>{label}</button>
    
}