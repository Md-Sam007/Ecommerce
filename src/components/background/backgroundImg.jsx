import img1 from "./img/background1.jpg"
import img2 from "./img/background2.jpg";
import img3 from "./img/background3.webp";
import img4 from "./img/background4.jpg";

import { useState } from "react";
import {Link} from "react-scroll";

const images = [img2,img1, img3, img4];

function BackgroundImg() {
    const [current, setXtransform] = useState(0);

    function left() {
        current===0?setXtransform(images.length-1):setXtransform(current-1);
    }
    function right(){
        current ===3?setXtransform(0):setXtransform(current+1);
        
    }
    return (
        <div >
            <div className="absolute h-full w-full z-[-3] top-0 flex "  style={{transform: `translateX(-${current * 100}vw)`, transition: "ease-in-out 1s"}}>
                
                {images.map((val, index) => (
                   <img
                        key={index}
                        src={val}
                        alt="Background"
                    className="h-full w-full object-cover flex-shrink-0"/>  
                ))}

            </div>
            <div className="absolute text-[8vmin] font-bol p-7 h-[30vh] left-[1vw] text-white w-[40vw] top-[28vmin]"> LEVEL UP YOUR GAMING EXPERENCE </div>
            <button onClick={right}  className="absolute top-[70vh] left-[90vw] w-[50px] z-[0.8] h-[50px] bg-black opacity-70 hover:opacity-70 text-white">&gt;</button>
            <button onClick={left} className="absolute top-[70vh] left-[20vw] h-[50px] w-[50px] bg-black opacity-70 hover:opacity-70 text-white">&lt;</button>
            <Link to="section2" smooth={true} duration={500}><button className="absolute top-[70vh] left-[35vw] hover:bg-green-300 font-serif text-[3vmin] text-white
            h-[8vmin] w-[28vmin]" style={{transition:"all 1s ease"}}> Shop</button></Link>
            <button className="absolute top-[70vh] left-[52vw] hover:bg-green-300 font-serif text-[3vmin] text-white
            h-[8vmin] w-[28vmin]" style={{transition:"all 1s ease"}}> View More</button>
        </div>
    );
}

export default BackgroundImg;
