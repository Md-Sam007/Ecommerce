import {useEffect, useState} from "react";
import img from "./images/background.webp";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import {  toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login(){
    const [showPas,setShow]=useState(false);
    const [signup,setSignup]=useState("Login");
    const [LoginData,setdata]=useState({LoginEmail:"",Password:"",Nickname:""})
    const location =useLocation();
    const{state}=location.state|| "";
    const navigate=useNavigate();

    useEffect(()=>{
       if(state){
        setSignup(state)
       }
        else{
            setSignup("Login")
        }
        
    },[])


    async function SIGNUP(){
       
        try{
            const response=await axios.post("https://ecommerce-z49z.onrender.com/signUP",{LoginData})
            toast("Successfully Signed In Please Login",{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}})
            
        }catch(e){
            console.log(e)
            if(e.response.status===409){
                toast("Email Already exist, Please Login",{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}});   
            }
            else if(e.response.status===400){
                toast("Wrong Email Entry,Please Add '@'",{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}});
            }
            else if(e.response.status===500){
                toast("Internal Server Error, Please Try Again Later",{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}})
            }
        }
        
        

    }
    async function Login(){
        
       try{
            const result=await axios.post('https://ecommerce-z49z.onrender.com/usersinfo',{LoginData})
            
            
            if (result.data.jwtToken){
               
                navigate('/',{state:{jwtToken:result.data.jwtToken,id:result.data.id,name:result.data.name,email:result.data.email}});
                
            }

        }catch(e){
            console.log(e);
            if(e.response){
                if(e.response.status===401){
                    toast("Email Or Password Is Not Matching With Our Database",{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}});
                   
                }
                else if(e.response.status===400){
                    toast("Wrong Email Entry,Please Add '@'",{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}});
                }

            }
            else{
                toast(`Request Time out. Please Try Again Later`,{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}});

            }
           
           
                
         
        }
        
        
    }

    return (
        <div className="flex justify-center items-center h-screen " style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <div className="h-[90vh] w-[35vw] relative  backdrop-blur-[6px] text-center bg-white bg-opacity-20  rounded-[40px] shadow-[2px_3px_20px_9px] shadow-[#e3e3e3]">
                
                <div className=" text-[4em] opacity-50 text font-sans italic  ">{signup}</div>
                <div className="flex flex-col gap-[25px] absolute left-[5vmin]  h-[70vh] w-[30vw]" >
                    {signup==="Sign Up"?(<div className="  opacity-45 mb-[70px] mt[20px]  outline-pink-500 text-pink-400 h-[7vmin]    w-[30vmax] text-[25px]">
                        {/**sign up inputs */}


                        {/**sign up Nivkname input */}
                        <input className="w-[30vmax] h-[7vmin] mb-[20px] outline-pink-500" onChange={(e)=>{setdata((prev)=>{return({...prev,Nickname:e.target.value})})}}  placeholder="Nickname" />

                        {/**sign up Email Input */}
                        <input className="w-[30vmax]  h-[7vmin]   outline-pink-500" onChange={(e)=>{setdata((prev)=>{return({...prev,LoginEmail:e.target.value})})}} placeholder="Email"/>
                    </div>):null}
                    {/**Login Inputs */}
                    <input placeholder={signup==="Sign Up"?("Password"):"Email"} type={signup==="Sign Up"?"password":"text"}className=" p-[10px] opacity-45  outline-pink-500 text-pink-600  h-[7vmin] w-[30vmax] text-[25px]" onChange={signup==="Login"?(e)=>{setdata((prev)=>{return({LoginEmail:e.target.value})})}:null}/>
                    
                    {signup==="Login"?(<div className="flex gap-1 ml-[50vmin] text-[20px] opacity-60">
                        show    
                        <input type="checkBox" onClick={()=>{setShow(prev=>!prev)}} className=" h-[15px] mt-[10px] w-[20px]"/>
                    </div>):null}
                    {/**PassWord Input */}
                    <input placeholder="Password" type={showPas?"text":"password"} onChange={(e)=>setdata((prev)=>{return({...prev,Password:e.target.value})})} className=" p-[10px] opacity-45 outline-pink-500 text-pink-600  h-[7vmin] w-[30vmax] text-[25px] font-mono"/>

                    {/**Login && Sign up button */}
                    <input type="button" className="  h-[7vh] w-[30vw]  cursor-pointer bg-pink-200 outline-none opacity-90" value="Submit" onClick={signup==="Login"?Login:SIGNUP}/>


                    {/**Submit button */}
                    <div className="  hover:text-blue-800 hover:underline hover:cursor-pointer " onClick={()=>{setSignup((prev)=>prev==="Sign Up"?"Login":"Sign Up")}}> <span className="text-[20px]">{signup==="Login"?"Sign Up":"Login"}</span></div>

                </div>
                <Outlet/>
                
                
            </div>
            <ToastContainer/>
            
        </div>
    )
}
export default Login;