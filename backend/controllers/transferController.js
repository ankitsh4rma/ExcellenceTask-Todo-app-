const mongoose = require("mongoose")
const account = require("../models/accountsSchema");
const { default: errorMap } = require("zod/locales/en.js");
const transfer = async(req,res)=>{
    const {fromUserId,toUserId,amount}=req.body;
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const opt = {session}
        const sender = await account.findOne({userId:fromUserId}).session(session);
        const receiver = await account.findOne({userId:toUserId}).session(session);
        if(!sender){
            throw new Error("Sender not Found")
        }
        if(!receiver){
           throw new Error("Receiver not found")
        }
        const senderBalance = parseFloat((sender.balance).toString());
        const transferAmount = parseFloat(amount);
        
        if(senderBalance<transferAmount){
          throw new Error(" Insufficent Balance")
        }
        sender.balance = mongoose.Types.Decimal128.fromString((senderBalance-transferAmount).toString());
        receiver.balance = mongoose.Types.Decimal128.fromString(
            (parseFloat(receiver.balance.toString())+transferAmount).toString());
        await sender.save(opt);
        await receiver.save(opt);
        await session.commitTransaction();
         session.endSession();

        return res.status(200).json({message:"Transaction complete",complete:true})
    } catch (err) {
        await session.abortTransaction();
       session.endSession();
        return res.status(401).json({message:"Error Occured",error:err})
    }
}
module.exports=transfer;