import AdminNav from "./components/AdminNav";
import Left from './components/left';
import AddProducts from "./components/AddProducts";
import ViewProducts from "./components/viewProducts";
import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function Admin(){
    
    const navigate=useNavigate();
    const location=useLocation();
    const { jwtToken,  name } = location.state || {};
    

    const [isTrue,setTrue]=useState(false);
    useEffect(()=>{
        const fun=()=>{
            if(!jwtToken){
                alert("Login Is Require");
                navigate("/admin");
            }
            if(name!=='Admin'){
                alert("unauthorised");
                navigate("/admin");

            }

        };
        fun();
        
    },[jwtToken,name])

    function addproduct(e){
      
        setTrue(e);
    }
    return(
        
    <div>
        <AdminNav/>
        <div className="h-[100vh] w-[full] flex">
            <div className="fixed">
                <Left AddProduct={addproduct} />
            </div>
            
            <div className="ml-[18vw]">
                {isTrue?<AddProducts/>:<ViewProducts true={isTrue}/>}
            </div>
            
            
            

        </div>
        
    </div>
    
    )
}