import { useEffect, useState } from "react";
import Img from "./Img";
const prod=["Gaming Laptop","Chair"," Controller","Game Desks","Graphics Card" ,"Headphone","Headset","Keyboard","Mouse","Weel"];
export default function ProductType(props){
    const [type,setType]=useState(new Array (prod.length).fill(false));

    const handleEvent=(e,position)=>{
        
        const updatedCheckArray=type.map((val,index)=>{
            
            return(
                
            index===position? e.target.value:false);
                
        })
        setType(updatedCheckArray);
    }
    useEffect(()=>{
        const fun=()=>{
            props.type(type);
        }
        fun();
    },[type]);

    return(
        <div >
            <h1 className="text-gray-200 ml-[2vw]   mt-[8vh] text-[40px]"> PRODUCT TYPE</h1>
            <div className="h-[40vh] flex-col  ml-[2vw] w-[20vw] pt-[7vh] ">
                <div className="h-[30px] flex-col  w-[15vw]">
                
                    {prod.map((val,index)=>{return (<div key={index}  className="flex mt-[10px]"> 
                        <input  type="CheckBox" value={val} checked={type[index]} onChange={(e)=>{handleEvent(e,index)}} className=" appearance-none h-[20px] w-[20px] bg-white border-2 border-gray-300 rounded-md checked:bg-black checked:border-white focus:outline-none focus:ring-1 focus:ring-white transition duration-200 ease-in-out"></input>
                    <div className="text-[18px] ml-[10px] text-gray-400 font-semibold">{val} </div> 
                    </div>)})}
                  
                         
                </div>
               

            </div>
            <div className=" h-[293vh] border-t-2 border-r-2 border-opacity-40
             border-white w-[30vw] mt-[15vh]">
                <Img/>
            </div>
        </div>
    )
}