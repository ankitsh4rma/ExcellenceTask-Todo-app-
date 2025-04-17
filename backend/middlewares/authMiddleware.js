const jwt = require("jsonwebtoken");
require("dotenv").config();
const authMiddleware = async(req,res,next)=>{
    console.log('Full headers:', req.headers);


 
   try {
    let userToken = req.headers['authorization'];
    if(!userToken||!userToken.startsWith("Bearer")){
        console.log(userToken);
        return res.status(422).json({message:"invalid Input"});
  }
  console.log(userToken);
  userToken=userToken.split(" ")[1];
  
  const user = await jwt.verify(userToken,process.env.JWT_SECRET);
  res.user = user;
  next();
   } catch (error) {
    return res.json({message:"Error occured while authentication"})
   }
   
}
module.exports=authMiddleware;