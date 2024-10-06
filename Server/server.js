import express from "express";
import { itemModel } from "./items.js";
import cors from "cors";
import connectDB from "./db.js";
import { UserModel } from "./users.js";
import { singnUpValidation ,LoginValidation} from "./validation/validation.js";
import bcrypt from "bcryptjs";
import  Jwt  from "jsonwebtoken";
import {authentication} from "./authentication/auth.js";
import { FileData } from "./FileData/FileData.js";
import multer from "multer";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";
dotenv.config();


connectDB();



const upload=multer({dest:'./FileData/asserts'})
const app = express();

app.use('/', express.static('assets'));
app.use(express.json());
app.use(cors());
const port = process.env.PORT||4000;
//get products from database
app.get("/product", async (req, res) => {
    let page=req.query.p||0;
    let PageLimit=8;
    let skip=(page*PageLimit);
  
    if(req.headers.title){
        PageLimit=0;
        skip=0;
    }
    try {
        if(req.headers['type']&&req.headers['type']!=='Gaming Laptop'){
            console.log(req.headers['type']);
            //sending product Category
            const items = await itemModel.find({type:req.headers['type']});
            console.log(items);
            res.status(200).json(items);

        }
        else{
            //all products
            const items = await itemModel.find().skip(skip).limit(PageLimit);
            
            
            res.status(200).json(items);

        }
        
        
        
    } catch (e) {
        console.error("Error fetching items:", e.message);
        res.status(500).json({ error: e.message });
    }
});
//updating product database
app.post("/UpdateProducts",async (req,res)=>{
    try{
        const result=await itemModel.deleteOne({"_id":new ObjectId(req.body.item_id)});
        res.status(201).json({message:"Item Deleted Successfully"});

    }catch(e){
        console.log(e);
    }
})



//Sign Up 
app.post("/signUP",singnUpValidation,async(req,res)=>{
    const {LoginEmail,Password,Nickname}=req.body.LoginData;
    try{
        const newUser=await UserModel.find({LoginEmail:LoginEmail});
        if(newUser){
            res.status(409).json("User Already exist ")
            return
        }
        else{
            try{
                const newPas=await bcrypt.hash(Password,10);
                const result=await UserModel.create({LoginEmail:LoginEmail,Password:newPas,NickName:Nickname});
                res.status(201).json({message:"Entry successful"});

            }catch(e){
                res.status(500).json({message:"Internal Server Error"});
            }
        }
        
        
        
    }catch(e){
        console.log(e)
       
        
    }
})

//Getting user infomation from DB
app.post("/usersinfo",LoginValidation,async(req,res)=>{
   
    const {LoginEmail,Password}=req.body.LoginData;
    
    
    try{
        const result=await UserModel.findOne({LoginEmail:LoginEmail});
        
        if(result){
            
            const isCompare= await bcrypt.compare(Password,result.Password)
            
            if(!isCompare){
                res.status(401).json({message:"Wrong Password"})
            }
           
            const jwtToken=Jwt.sign({email:result.LoginEmail,email_id:result.id},
                process.env.Jwt_Secrete,
                {expiresIn:'24h'}
            )
            
            res.status(200).json({message:"SuccessFully generated JWT Token",id:result.Password,jwtToken:jwtToken,email:result.LoginEmail,name:result.NickName});
            
        }
        else{
            res.status(404).json({message:"Email not found Sign up"});
        }
    }catch(e){
        console.log(e);
    }
})
//Adding products to User CART Information
app.post("/addCart",authentication,async(req,res)=>{
    try{
        const result=await UserModel.updateOne({NickName:req.body.name},{$push:{Cart:req.body.item}})
        res.status(200).json({message:"Cart Added successfully"});
        
    }
    catch(e){
        console.log(e);
    }
})

//getting Cart infromation

app.get("/userCart",authentication,async(req,res)=>{
    try{
        const result = await UserModel.find(
            { "LoginEmail": req.headers['name']}, 
            { "Cart": 1,_id:0}
         )
         res.status(201).json(result);
        
         
    }catch(e){
        console.log(e);
    }
})
//deleting Items from userCart
app.post("/delItems",async (req,res)=>{
  
    try{
        const result=await UserModel.updateMany({"Cart._id":new ObjectId(req.body.Id)},{"$pull":{"Cart":{"_id":new ObjectId(req.body.Id)}}})
        if (result.modifiedCount > 0) {
            // Refetch the updated cart and send it back
            const updatedCart = await UserModel.find(
                { "LoginEmail": req.headers['name'] }, 
                { "Cart": 1, _id: 0 }
            );
            res.status(200).json(updatedCart);
        } else {
            res.status(400).json({ message: "Item not found or could not be deleted." });
        }
    }
    catch(e){
        console.log(e);

    }
})
//admin Add Product
app.post("/AddProducts",FileData,async(req,res)=>{
    
    try{
        const result=await itemModel.create({
            "title":req.body.title,
            "price":req.body.price,
            "rating":req.body.rating,
            "type":req.body.type,
            "imgSrc":req.file.filename

        })
        res.status(201).json({message:"Item Added successfully "})
    }catch(err){
        console.log(err)
    }
})

app.get("/ProductType",async (req,res)=>{
    try{
        const result =await itemModel.find({
            "type":req.headers.arr
        })
        res.status(201).json(result);
    }
    catch(e){

    }
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
