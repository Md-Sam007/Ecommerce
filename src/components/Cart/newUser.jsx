
import {Link} from "react-router-dom";
export default function newUser(){
    return(
        <div className="h-[100vh] w-[100vw] mt-0 pt-[16vmin]  bg-black">
            <div className="h-[60vh] w-[33vw]pt-0 pl-[90px]">   
                <div className="text-[5em]  text-white font-sans  font-extrabold">
                    YOUR CART &nbsp; &nbsp;   IS EMPTY           
                </div>
                <Link to="/Login"state={{state:"Sign Up"}}><button className="h-[8vh] ml-[3vh] w-[22vw] bg-[#c6f324] mt-[40px] text-[black] text-[20px] hover:text-[#c6f324] hover:bg-black hover:border-2 border-opacity-35 border-white">Sign UP</button></Link>
                <div className="text-[2.3em] mt-[40px] ml-[8vmin] text-white font-sans  font-semibold">
                    Have AN ACCOUNT?     
                </div> 
 
                <div className="font-sans text-[1.3em] ml-[120px] mt-[10px] text-white">
                <Link to="/Login"state={{state:"Login"}}><span className="underline">Log In</span></Link>&nbsp; to check out faster
                </div>

            </div>
            
        </div>
    )
}