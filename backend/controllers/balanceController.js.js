const accounts = require("../models/accountsSchema")

const balanceController=async(req,res)=>{
   try {
    const userId= req.params.id;
    console.log(userId)
    const user = await accounts.findOne({userId:userId});
   
    const balance = user.balance;
    return res.status(200).json({balance});
   } catch (error) {
    return res.status(401).json({message:"error ocurred"})
   }
   
}
module.exports = balanceController;