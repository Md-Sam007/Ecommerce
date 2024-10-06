import { StateSelect, } from "react-country-state-city";//india country code-101
import "react-country-state-city/dist/react-country-state-city.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "./Card";
export default function Details() {
    return (
        <div className="h-[auto] mt-[90px] ml-[21vmin] w-[38vw] p-[50px]  border-t-2  border-black border-opacity-30">
            <div className="text-[1.8em] text-black font-cursive mb-5 font-bold">Contact</div>{/**Contact Info */}
            <input className="h-[6vmin] w-[32vw] text-[1.5em] mb-5 font-semibold font-cursive  p-[10px]" placeholder="Enter your Contact No." />
            <div className="text-[1.8em] text-black font-cursive  mb-5 font-bold">Delivery</div>

            {/**Region */}
            <select className="mb-5 h-[6vh] p-[10px] w-[31vw] font-serif text-[1.3em] rounded-lg font-medium">
                <option>Select Region</option>
                <option>India</option>
            </select>
            <div className="flex">{/**Names */}
                <input required className="h-[6vmin] w-[15vw] rounded-lg text-[1.5em] mb-5 font-semibold font-cursive  p-[10px]" placeholder="First Name" />
                <input className="h-[6vmin] w-[15vw] text-[1.5em] rounded-lg ml-[20px] mb-5 font-semibold font-cursive  p-[10px]" placeholder="Last Name" />
            </div>
            {/** Address*/}
            <input className="h-[6vmin] w-[31vw] text-[1.5em] rounded-lg mb-5 font-semibold font-cursive  p-[10px]" placeholder="Address" />
            {/**city,State,Pin Code */}
            <div className="flex gap-[10px]">
                <input  className="h-[6vmin] w-[10vw] rounded-lg text-[1.5em] mb-5 font-semibold font-cursive  p-[10px]" placeholder="Pin Code" />
                <StateSelect countryid={101} placeHolder="Select State" />
                <input type="number"  className="h-[6vmin] w-[10vw] rounded-lg text-[1.5em] mb-5 font-semibold font-cursive  p-[10px]" placeholder="Pin Code" />


            </div>
            <div className="text-[1.8em] text-black font-cursive mb-5 mt-[40px] font-bold">Payment</div>
            <Card key={1001}/>
            {/**button */}
            <button 
            onClick={()=>{
                   toast("Order Placed",{
                    position: "top-center",
                    theme:"dark"
                  }) 
            }} className="h-[9vh]  w-[33vw] bg-[#c6f324] font-bold rounded-xl mt-[40px] text-[black] text-[2em] hover:text-[#c6f324] hover:bg-black hover:border-2 border-opacity-35 border-white">Pay Now</button>
            <div className=" mt-[20px] w-[33vw] border-t-2 border-black border-opacity-25 ">
                <div className="text-[1em] ">All rights reserved GameOn </div>     
            </div>
            <ToastContainer/>

        </div>
    )
}