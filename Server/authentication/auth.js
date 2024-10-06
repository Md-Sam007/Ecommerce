
import Jwt  from "jsonwebtoken";


const authentication =  (req,res,next)=>{
    const auth=req.headers['authorization']||req.body.authentication;
    
    
    if(!auth){
        return res.status(403).json({message:"Require a valid Jwt Token"})
        
    }
    try{
        const verification =Jwt.verify(auth,process.env.JWT_SECRETE);
        req.user=verification;
        next();
        

    }catch(e){
        console.log("hello")
        return res.status(403).json({message:"unauthorize or need a valid jwt Token"})
    
    }
   
   
}
export {authentication};