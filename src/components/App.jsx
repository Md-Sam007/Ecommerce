import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Element, animateScroll  } from 'react-scroll';
import BackgroundImg from "./background/backgroundImg";
import Nav from "./nav";
import Shop from "./shop/shop";
import Cart from "./Cart/Cart";
import Footer from "./Footer/footer";
import Blog from "./Blog/blog";


function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setdata] = useState();
    const { jwtToken, id, name, email } = location.state || {};
    const [type, setType] = useState();//Product Type
    const [ivis, setInvis] = useState(false);//Cart
    //Page
    const [page, setPage] = useState(0);



    useEffect(() => {
        const fetchData = async () => {
            
            //fetching product
            try {
                if (type) {
                    const result = await axios.get(`https://ecommerce-z49z.onrender.com/product?p=${page}`,{headers:{type:type}});
                    if (result.data) {

                        setdata(result.data);//product data
    
    
                    }

                }
                else {
                    const result = await axios.get(`https://ecommerce-z49z.onrender.com/product?p=${page}`);
                    if (result.data) {

                        setdata(result.data);//product data


                    }

                }



            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Failed to fetch data. Please try again.");
            }

        };

        fetchData();
        const query = new URLSearchParams(location.search);
        const scrollTo = query.get('scrollTo');


        if (scrollTo) {
            const section = document.getElementById(scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [jwtToken, navigate, page,type]);


    function cart() {
        setInvis(prev => !prev);



    }
    function Page(val) {
        setPage(val);


    }

    
    //filter product type
    // Render a loading state if data is not yet fetched
    if (!data) {

        return <div>Loading...</div>;
    }
    else {
        return (
            <div name="section1" className="h-[auto] " id="part1">
                <div className="h-[100vh] w-[99vw]  relative overflow-hidden ">
                    <Nav cart={cart} key={505} />
                    <Cart invis={ivis} email={email} key={606} auth={jwtToken}/>
                    <div>
                        <BackgroundImg key={707} />
                    </div>
                </div>
                <div className="h-[auto] bg-slate-400">
                    <Element name="section2" id="part2" >

                        <Shop key='2001' data={data} type={(e) => { setType(e[0]) }} jwtToken={jwtToken} id={id} email={email} name={name} pagging={Page} />
                    </Element>
                </div>

                <div className="h-[full] w-[full] bg-[#141415]">
                    <Element name="section3" id="part3">
                        <Blog key="303" />

                    </Element>
                </div>
                <Footer key={404} />



            </div>
        )

    }

}




export default App;