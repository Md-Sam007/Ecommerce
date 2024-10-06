import Oders from "./oders"
export default function Items(props){
    return(
        <div className="h-[150vh] mt-[90px] w-[45vw] bg-[#3c3a3a] flex-row border-t-2 border-black border-opacity-30">

            <div className="h-[auto] w-[45vw] p-[40px]">
                 
                {props.data.map((val,index)=>{
                    return(
                        <Oders image={val['imgSrc-src']} type={val.type} rating={val.rating} price={val.price} imgSrc={val.imgSrc}/>
                    )
                })}

            </div>
            
            <div className="h-[20vh] w-[45vw]  border-t-2 p-[40px] flex justify-between border-white border-opacity-25">
                <div className="text-[1.8rem] font-serif font-semibold text-white">TOTAL</div>
                <div className="text-[1.8rem] font-sans font-bold text-white">₹{props.total}</div>

            </div>
        </div>
    )
}