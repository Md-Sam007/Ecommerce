import Card from "./Card";
import {Link} from "react-scroll";

export default function Blog(){

    
    return(
        <div className="bg-[#141415] h-[140vh] ml-[2.3vw] w-[95vw]  pt-[10vh] border-l-2 border-r-2 border-white border-opacity-40">
            <div  className="text-[3em] text-white font-semibold font-sans  text-center">Explore Our Gaming Blog</div>  
            <div className="h-[100vh] pt-[10vh] flex justify-between  w-[94.8vw]">
               <Link to={"section2"} smooth={"true"} duration={800}><Card 
               key="222"
               title="JOURNEYING THROUGH GAMING ANIMATION" desc="Game Animeation Blogs" img="//wdt-apexx.myshopify.com/cdn/shop/articles/blog-15.jpg?v=1718018309&width=165 165w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-15.jpg?v=1718018309&width=360 360w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-15.jpg?v=1718018309&width=533 533w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-15.jpg?v=1718018309&width=720 720w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-15.jpg?v=1718018309&width=1000 1000w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-15.jpg?v=1718018309&width=1500 1500w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-15.jpg?v=1718018309 1920w"/>
               </Link>
               <Link to={"section2"} smooth={"true"} duration={800}><div >
               <Card key={102} 
                title="EXPLORING ANIMATION GAMING CULTURE"
                desc="Blog About Gaming Culture"
                img="//wdt-apexx.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1718018261&width=165 165w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1718018261&width=360 360w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1718018261&width=533 533w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1718018261&width=720 720w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1718018261&width=1000 1000w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1718018261&width=1500 1500w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-14.jpg?v=1718018261 1920w"/>
               </div></Link>
               
                <Link to={"section2"} smooth={"true"} duration={800}><Card key={103} 
                title="EXPLORING CLASSIC GAME GEMS "
                desc="Blog About Classics games "
                img="//wdt-apexx.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1718018193&width=165 165w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1718018193&width=360 360w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1718018193&width=533 533w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1718018193&width=720 720w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1718018193&width=1000 1000w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1718018193&width=1500 1500w,//wdt-apexx.myshopify.com/cdn/shop/articles/blog-13.jpg?v=1718018193 1920w"/></Link>

            </div>  
        </div>
    )
}