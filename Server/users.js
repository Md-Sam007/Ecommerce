

import mongoose from "mongoose";

const CratSchema=new mongoose.Schema({
    title:{type:String,require:true},
    price:{type:String,require:true},
    rating:{type:String,require:true},
    'imgSrc-src':{type:String,require:true},
    
    imgSrc:{type:String},
    type:{type:String,requte:true}
    
})



const UserSchema=new mongoose.Schema({
    LoginEmail:{type:String,},
    Password:{type:String,require:true},
    NickName:{type:String,require:false},
    Cart:[CratSchema]
})
const UserModel=mongoose.model('userinfo',UserSchema);
export {UserModel};
