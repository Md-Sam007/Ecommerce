import { useLocation } from "react-router-dom";
import img from "../Login/images/search.avif";
import {useState}  from "react";
import Nav from "./navBar";
import Review from './review';
import Details from "./details";
import Delevary from "./delivary";
import Footer from "../Footer/footer";
import axios from 'axios';
import Model from "./model";



export default function ProductInfo() {
    const location = useLocation();
    const { item,jwt,email,name } = location.state;
    const [user,newuser]=useState(false);
    
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
    async function Cart(){
        try{
            const con= await axios.post("https://ecommerce-z49z.onrender.com/addCart",{item:item,name:name,authentication:jwt});  
        }catch(e){
            console.log(e);

        }
      

    }
   function istrue(){
    console.log("here")
    newuser(prev=>!prev);
   }
   function remove(){
    console.log("AAAAAA")
    newuser(prev=>!prev);
   }

    return (
        <div >
            {user?
            <div className="absolute z-[1]"><Model set={remove} /></div>:null}
            <div className="h-[127vw] w-full flex relative bg-[#141415]" style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 55vh" }}>
                <Nav jwt={jwt} name={name} email={email} />
                    
                
                <div className="absolute h-auto w-full bg-[#36454F]  opacity-50"></div>
                <div className="absolute top-[21vh] left-[40vw] text-[8vmin] font-sans font-bold text-white "> {item.type} </div>

                <div className="h-[200vh] ml-[20px] relative w-[96vw]   mt-[65vh]  border-2 border-opacity-40
                    border-white  ">
                    <div className="absolute  border-4 border-opacity-40
                         border-white  left-[4vw] ">
                        <img src={item.imgSrc?`https://ecommerce-z49z.onrender.com/${item.imgSrc}`:item["imgSrc-src"]} className="h-[70vh]" />
                    </div>
                    <Details item={item} Cart={Cart} jwt={jwt} isTrue={istrue} />
                    <Review item={item} />
                    <Delevary />
                    
               </div>
               
            </div>
            <Footer/>
        </div>
    )
}