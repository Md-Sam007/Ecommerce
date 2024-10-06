import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {  toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AdminLogin(){
    const [LoginData,setdata]=useState({LoginEmail:"",Password:""});
    const navigate=useNavigate();
    async function handleEvenet(){
        try{
           
            const result=await axios.post("https://ecommerce-z49z.onrender.com/usersinfo",{LoginData})
            if (result.data.jwtToken){ 
                navigate('/adminPannel',{state:{jwtToken:result.data.jwtToken,name:result.data.name}});
            }

    
        }catch(err){
            console.log(err)
            if(err.response.status===401){
                toast("Email Or Password Is Not Matching With Our Database, Please Check Email and Password and try again",{theme:"dark",style:{fontSize:"1.4rem",width:"30vw",right:"17vw"}});
            }
            else if(err.response.status===400){
                toast("Wrong Email Entry,Please Add '@'",{theme:"dark",style:{fontSize:"1.8rem",width:"30vw",right:"17vw"}});
            }
            else if(err.response.status===404){
                toast("Email Or Password Is Not Matching With Our Database, Please Check Email and Password and try again",{theme:"dark",style:{fontSize:"1.4rem",width:"30vw",right:"17vw"}});
            }
    
        }
    }
    
    return (
    <div className="h-[100vh] w-[full] bg-[#c6c5c5] flex justify-center items-center">
        <div className="h-[60vh] w-[40vw] bg-white text-center flex-row rounded-2xl">
            <div className="text-[3em] font-sans font-semibold">Admin Login</div>
            <input value={LoginData.LoginEmail} onChange={(e)=>{setdata((prev)=>{return({...prev,LoginEmail:e.target.value})})}} placeholder="Login ID" className="h-[8vh] w-[30vw] mt-[60px] text-[1.7em] p-[20px] border-2 rounded-md border-black border-opacity-30" />
            <input type="password" placeholder="PassWord" value={LoginData.Password} onChange={(e)=>{setdata((prev)=>{return({...prev,Password:e.target.value})})}} className="h-[8vh] w-[30vw] mt-[60px] text-[1.7em] p-[20px] border-2 rounded-md border-black border-opacity-30" />
            <button onClick={handleEvenet} className="h-[7vh] w-[9vw] m-[20px] bg-[#008CBA] text-white text-[1.6rem] rounded-xl hover:bg-[#2323c9]">Log IN</button>
        </div>
        <ToastContainer/>

    </div>
    )
}