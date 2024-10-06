import {useState} from "react";
import StarRatings from 'react-star-ratings';
import {  toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Details(props){
    const item=props.item
    const [option,setoption]=useState(1);
    
    
    function eventHandler(){
            
            if(!props.jwt){
                props.isTrue();
                

            }
            else{
                props.Cart(item);
                toast.success("Added to Cart",{theme:"dark"});
            }
            
        

        }
    return(
        <div className=" ml-[52vw] flex-col h-[80vh] text-gray-300 top-[7vh] w-[42vw]">
                        <h4 className="text-[1.6rem] ">{item.title}</h4>
                        
                        <div className=" flex gap-[10px]  top-[23vh]"><StarRatings rating={item.rating} numberOfStars={5} starDimension='40px' starRatedColor='#c6f324' starSpacing='6px' /><h1 className="text-[25px]">{item.rating}</h1>
                            
                        </div>
                        <h2 className="text-[2.5rem] mt-[20px] text-gray-300 ">{item.price}</h2>

                        <div className="flex gap-[25px] text-gray-300 mt-[20px]">
                            {option===1?null:<button onClick={()=>{setoption((prev)=>prev-1)}} className="h-[10px] text-[30px] w-[10px]">-</button>}
                            <h2 className="text-[30px]">{option}</h2>
                            <button onClick={()=>{setoption((prev)=>prev+1)}} className="h-[10px] text-[30px] w-[10px]">+</button>
                            
                             <ToastContainer/>

                        </div>
                        <button className="h-[10vh] ml-[10px] w-[42vw] bg-[#c6f324] mt-[30px] text-[black] text-[20px] hover:text-[#c6f324] hover:bg-black" onClick={eventHandler}>Add TO Cart</button>
                    </div>
    )
}