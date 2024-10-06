import img from "../Login/images/search.avif";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "./products";
import NoAvailableProd from "./NoAvailabelProd";
import Pagging from "./paging";
import ProductType from "./ProductType";


export default function Shop(props) {

    const [pageLimit, setLimit] = useState();
    const [invisible,setInvisible]=useState("visible")
    function pagging(val) {
        props.pagging(val);

    }
    useEffect(() => {
        setLimit(props.data.length);
        if(props.data.length<=1){
            setInvisible("invisible");
        }
        else{
            setInvisible("visible");
        }
    }, [props.pagging,props.data])



    //functio for Product Type
    async function type(e) {
        props.type(e.filter((val) => val[0]))
        
    }




    return (
        <div className="h-[440vh] w-full flex relative bg-[#141415] border-b-2 border-opacity-40 border-white " style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 75vh" }}>


            <div className=" absolute top-[31vh] left-[36vw] text-[8vmin] font-sans font-bold text-white">GAMING LAPTOPS</div>
            <div className="h-auto relative w-full  z-[0.7] mt-[75vh] border-t-2 border-opacity-40
                 border-white  ">
                <div className=" flex-col flex-wrap h-[90vh] w-[30vw] blur-none border-r-2 border-opacity-40 border-white">
                    <ProductType type={type} key={'11203Rjsa'} />

                </div>

                <div className="relative h-[auto] flex gap-[20px] flex-wrap w-[68vw] p-[10px] left-[32vw] top-[-98vh] mt-[0px]">

                    {props.data.length>=1 ? props.data.map((val, index) => {
                        return (
                            <Link to="/product" state={{ item: props.data[index], jwt: props.jwtToken, email: props.email, name: props.name }}><Product data={val} key={val['_id']} /></Link>
                        );
                    }): <NoAvailableProd/>
                    }
                            <div className={`${invisible}`}>
                                <Pagging pagging={pagging} pageLimit={pageLimit} />
                            </div>
                            
                        </div>
                
                    
            </div>













            </div>



            )
                }



