import ProductList from "./productList/ProductList";
import axios from "axios";
import {useState,useEffect} from"react";
import Model from "./model/model";
export default function ViewProducts(props){
    const [data,setData]=useState();
    const [isconfirm,setconfirm]=useState(false);
    const [item_id,setID]=useState();

    useEffect(()=>{
        const fun= async ()=>{
            try{
                const result =await axios.get("https://ecommerce-z49z.onrender.com/product",{headers:{title:"Admin"}})
                
                setData(result.data);
                console.log(result.data);
                
                
            }catch(e){
                console.log(e);
            }
        }
        fun();
    },[]);
    async function removeProduct(item_id){
        setData(()=>{
            
            return(data.filter((val)=>{return(val["_id"]!==item_id)}))
        })
        try{
            const result =await axios.post("https://ecommerce-z49z.onrender.com/UpdateProducts",{item_id:item_id})
            console.log(result)
        }catch(e){
            console.log(e)
        }

        
        

    }
    function doubt(e){
        setID(e);
        setconfirm(true);

    }
    function Confirm(val){
        if(val){
            removeProduct(item_id);
            setconfirm(false);
        }else{
            setconfirm(false);
        }


    }
    if(!data){
        return(<div>
            Loading
        </div>)
    }
    else{
        return (
            
        
            <div className="h-[1000vh] w-[100vw] pl-[60px] pt-[30px]  bg-[#EEEEEE]">
                {isconfirm?<Model Confirm={Confirm}/>:null}
                <div className="h-[auto] w-[76vw] rounded-lg pt-[10px] p-[50px]  bg-white text-center">
                    <span className="text-[1.6em] text-black font-sans font-medium text-center">All Produts</span>
                    <div className="h-[8vh]  w-[70vw] mt-[8vmin] border-b-2 border-[black] border-opacity-40">
                        <ul className="flex gap-[80px] text-[1.2em] font-sans">
                            <li>Products</li>
                            <li className="ml-[50px]">Title</li>
                            <li className="ml-[30vmin]">Price</li>
                            <li>Ratings</li>
                            <li>Category</li>
                            <li>Remove</li>
                        </ul>
    
                    </div>
                    {data?data.map((e,index) => {
                        return(
                            <ProductList key={index} title={data[index].title} price={data[index].price} id={data[index]["_id"]} ratings={data  [index].rating} Remove={doubt} image={data[index]['imgSrc-src']} imageSrc={data[index].imgSrc}
                         type={data[index].type}/>
                        )
                        
                    }):null}
                    
                    
                </div>
    
    
            </div>
        )
    }
    
}