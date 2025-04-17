const mongoose = require("mongoose");
const {Schema} = mongoose;

const accountsSchema = new mongoose.Schema({
    userId:{type:Schema.Types.ObjectId,ref:'signupmodels',required:true},
    balance:{type:mongoose.Types.Decimal128,required:true}
});
module.exports = mongoose.model("accounts",accountsSchema);