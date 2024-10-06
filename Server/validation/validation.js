import Joi from "joi";
import { Schema } from "mongoose";

const singnUpValidation=(req,res,next)=>{
    
    const Schema=Joi.object({
        LoginEmail:Joi.string().email().required(),
        Password:Joi.string().alphanum().min(6).max(20).required(),
        Nickname:Joi.string().min(4).max(20).required(),
    })
    const {error}=Schema.validate(req.body.LoginData);
    if(error){
        res.status(400).json({message:"Invalid Email Format"});
        return;
        
    }
    next();
}

const LoginValidation=(req,res,next)=>{
    
    const Schema=Joi.object({
        LoginEmail:Joi.string().email().required(),
        Password:Joi.string().alphanum().min(6).max(20).required(),
        
    })
    const {error}=Schema.validate(req.body.LoginData);
    if(error){
        
        res.status(400).json({message:"Invalid Email Format"});
        return;
    }
    
    next();
}

export {singnUpValidation,LoginValidation};
