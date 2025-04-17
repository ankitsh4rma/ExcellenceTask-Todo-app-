import { useEffect, useState } from "react";
import { AppBar } from "../Components/AppBar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
import axios from "axios";

 function  Dashboard(){

    const[users,setUsers]=useState(null);
    const[balance,setBalance]=useState([]);
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const token =localStorage.getItem("token");
    const id=user._id;
    console.log(id);
    console.log(token);
   useEffect(()=>
    {
        
   
    async function fetchData() {
        console.log("fetchdata")
        try {
            
            const [balanceRes,usersRes]= await Promise.all([
                axios.get(`http://localhost:3000/api/v1/account/balance/${id}`,{
                 headers:{
                     Authorization: `Bearer ${token}`
                 }}
          ),axios.get(`http://localhost:3000/api/v1/users/${id}`,{
           
          headers:{
            Authorization:`Bearer ${token}`
         } 
        })
             ])
             const rawBalance = balanceRes.data.balance.$numberDecimal;
             
             setBalance(parseFloat(rawBalance));
             setUsers(usersRes.data)
        } catch (error) {
            console.log("Error fetching data",error)
        }
    };
    fetchData();
    
},[])
    
   
    
return<div>
    <AppBar/>
    <div className="mx-10">
   <Balance balance={balance} />
    <Users users={users} /> 
    </div>
    
</div>
}
export default Dashboard;