import {Link} from "react-router-dom";

export default function Model(props){
    return(
        <div className="h-[100vh] w-[100vw] fixed z-[0.5]">
                <div className="h-[40vh] w-[35vw] bg-[#252525] ml-[70vmin] mt-[30vmin] flex-row text-center p-[30px] rounded-xl">
                    <div>
                        <button className="text-[1.7em] text-white hover:text-red-600 cursor-pointer ml-[60vmin]"
                        onClick={()=>{props.set()}}>X</button>
                    </div>
                    <span className="text-[2em] text-white ">Please Sign To Add To Cart</span>
                    <div className="mt-[2vmin]">
                    <Link to="/Login" state={{state:"Sign Up"}}><button className="h-[8vmin] w-[14vmin] rounded-xl hover:text-[#c6f324] hover:bg-black bg-[#c6f324]"
                    >Sign Up</button></Link>
                    </div>
                    <div className="mt-[2vmin]">
                        <span className="font-sans text-white text-[1.2em] ">Already Have An Account</span>
                    </div>
                    <div className="mt-[2vmin] text-[1.2em] text-white"> 
                        <Link to="/Login" state={{state:"Login"}}><sapn className="hover:cursor-pointer hover:underline">Log In</sapn></Link>

                    </div>
                   
                    
                    
                </div>
        </div>
    )
}