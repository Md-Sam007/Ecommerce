import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

import {useState} from "react";
import Cart from "../Cart/Cart";


export default function Nav(props){
    const [setInvis,setinvi]=useState(false);
    return(
        
        <nav className="h-[12vh] w-[100vw] bg-blue-400 fixed z-[1] pl-3 border-b border-gray-200 border-opacity-40  bg-opacity-10">
            <Cart invis={setInvis} email={props.email} auth={props.jwt}/>
            <div className="absolute top-[20px] text-gray-300  text-[30px]"> Game on</div>
            <Link to="/?scrollTo=part1" state={{jwtToken:props.jwt,email:props.email,name:props.name}}><div className="absolute  h-[12vh] w-[90px] pt-6 pl-3 left-[40vw] text-[25px] cursor-pointer hover:bg-gray-900 text-gray-300 ">Home</div></Link>
            <Link to="/?scrollTo=part2" state={{jwtToken:props.jwt,email:props.email,name:props.name}} smooth={true} duration={600}><div className="absolute  h-[12vh] w-[90px] pt-6 pl-3 left-[48vw] text-[25px] cursor-pointer  hover:bg-gray-900  text-gray-300  ">Shop</div></Link>
            <Link to="/?scrollTo=part3" state={{jwtToken:props.jwt,email:props.email,name:props.name}}><div className="absolute  h-[12vh] w-[90px] pt-6 pl-3 left-[54vw] text-[25px] cursor-pointer  hover:bg-gray-900  text-gray-300">Blog</div></Link>
       

            <div className='absolute top-6 opacity-50 cursor-pointer left-[93vw]' onClick={()=>{setinvi(prev=>!prev)}}><ShoppingCartIcon sx={{height:"6vmin",width:"6vmin",color:"#0047AB"}}/></div>
            
        </nav>
       
    )
}
