import { useState,useEffect } from "react";
import {Link} from "react-router-dom";

export default function Section2(props){
    const [price,CalPrice]=useState(0);
    useEffect(()=>{
        const fun=()=>{
            if(props.data){
                const totalPrice = props.data.reduce((total, val) => {
                    if (val.price) {
                      // Ensure price is a string and remove non-numeric characters
                      const price = val.price.replace(/[^0-9]/g, '');
                      return total + parseInt(price, 10); // Add parsed price to the total
                    }
                    return total; // Skip if price is not valid
                  }, 0)
                  CalPrice(totalPrice);

            }
            

        }
        fun();
    },[props.data])
    return(
        
            <div className="h-[40vh] w-full bg-black border-t-2 border-opacity-35 border-white ">
                <div className="h-[10vh] p-7 w-full flex justify-between">
                    <div className="text-[2em] text-white font-serif font-extrabold">SUBTOTAL</div>
                    <div className="text-[2em]  text-white font-serif font-extrabold">₹{price}</div>

                </div>:
                <div className="h-[20px] w-full text-[1.3em] text-gray-400 pl-7 mt-[10px]">
                    <p>Taxes and shipping calculated at checkout</p>
                </div>
                
                <div className="h-[20vh] w-full  mt-[20px]">
                   
                   <Link to="/buy" state={{item:props.data,total:price}} ><button className="h-[8vh] ml-[8vh] w-[22vw] bg-[#c6f324] mt-[40px] text-[black] text-[20px] hover:text-[#c6f324] hover:bg-black hover:border-2 border-opacity-35 border-white">BUY It Now</button></Link>



                </div>
            </div>
    )
}