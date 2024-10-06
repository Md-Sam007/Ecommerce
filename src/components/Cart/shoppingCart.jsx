import Items from './items';
import { useState } from 'react';
export default function ShoppingCart(props){
    //removing Cart Items
    function Rem(val){
        props.Rem(val);

    }
    
    return(
        <div className={`bg-black w-full overflow-y-scroll relative h-[40vh]  flex`}>
                <div className=" text-center  border-b-2 border-white h-[60px] border-opacity-25 w-full">
                    <div className="text-[2.5em] text-gray-300">SHOPPING CART</div>
                    
                    { props.data?props.data.map((item,index)=>{
                        
                        return(<Items key={index} data={props.data[index]} Key={index} Rem={Rem}/>)

                        
                    }):<div><h1 className='h-[20vh] w-[20vw] text-yellow-50'>Not YET</h1></div>}
                </div>
            </div>
    )
}