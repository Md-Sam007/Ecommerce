import { useState, useEffect } from 'react';
import ShoppingCart from "./shoppingCart";
import Section2 from "./section2";
import axios from 'axios';
import NewUser from './newUser';
export default function Cart(props) {
    const [data1, setData] = useState();
    const [removeItem, removeItems] = useState();
    useEffect(() => {
        const fun = async () => {
            if(props.email){
            try {   
                if (removeItem) {

                    try {
                        const result = await axios.post("https://ecommerce-z49z.onrender.com/delItems", {
                            Id: removeItem
                        })
                        removeItems(null);

                    } catch (e) {
                        console.log(e);
                    }

                }
                //fetching user Cart Details
                const result = await axios.get("https://ecommerce-z49z.onrender.com/userCart", { headers: { name: props.email ,authorization: props.auth} });
                setData(result.data[0].Cart);

                console.log(data1);
            }
            catch (e) {
                console.log(e);

            }
        }
    }
        fun();
    }, [props.invis, removeItem])
    
    function CartItems(val) {
        removeItems(val);
    }
    return (
        <div className={`h-[80vh] fixed w-[31.8vw] ${props.invis ? `visible` : `invisible`}  bg-white ml-[67vw] mt-[13vh] overflow-hidden z-[1]`}>

            {data1?<div><ShoppingCart data={data1} Rem={CartItems} />
            <Section2 data={data1} /></div>:<NewUser/>}

        </div>


    )
}