import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import {useState,useEffect} from "react";
export default function Left(props){
    const { AddProduct } = props;
    const [isTrue,setTrue]=useState(false);
    useEffect(()=>{
        AddProduct(isTrue);

    },[isTrue,AddProduct])
   
    return(
        <div className="h-[80vh] w-[20vw] p-[3vmin] rounded-md ">
            <div onClick={()=>{setTrue(true)}} className={`h-[8vh] w-[15vw] bg-[#EEEEEE] p-[2vmin] gap-[15px] flex ${isTrue?"text-red-600":null}`} >
                <AddShoppingCartIcon sx={{height:"30px",width:"30px"}}/>
                <div className="font-sans text-[1em]">Add Product</div>
            </div>
            <div onClick={()=>{setTrue(false)}} className={`h-[8vh] w-[15vw] mt-[20px] bg-[#EEEEEE] p-[2vmin] gap-[15px] flex ${isTrue===false?"text-red-600":null}`}>
                <InventoryIcon sx={{height:"30px",width:"30px"}}/>
                <div className="font-sans text-[1em]">Product List</div>
            </div>
        </div>
    )
}