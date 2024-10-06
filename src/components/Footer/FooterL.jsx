

export default function FooterL(){
    return(
    <div className="h-auto  w-[40vw] flex-col   ">
     
     
        <div className="ml-[0.6vw]">
            
            <div className="text-[6vmin] text-white font-sans">
                GAME ON
            </div>
        </div>
        <div className="text-[2.7vmin] mt-[50px] text-gray-400">A Hero Need Not Speak When He Is Gone,The World Speaks Fro Him</div>
       <div> 
        <div className="h-[20vmin] w-[65vmin] mt-[50px] flex gap-5">
            <div className="h-[10.4vmin] w-[30vmin] border-2 border-white border-opacity-30  hover:border-green-500 hover:cursor-pointer " >
                <img src="https://wdt-apexx.myshopify.com/cdn/shop/files/google-icon-1.png?v=1715326290&width=200" className="h-[10vmin] w-[30vmin]"/>
            </div>
            <div className="h-[10.4vmin] w-[30vmin] border-2 border-white  hover:border-green-500 border-opacity-30 hover:cursor-pointer">
                <img src="//wdt-apexx.myshopify.com/cdn/shop/files/apple-icon.png?v=1715324456&width=200" className="h-[10vmin] w-[30vmin]"/>
            </div>

        </div>
       </div>

    </div>
    )
}