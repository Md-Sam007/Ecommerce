export default function Card(props){
    return(
        <div className="h-[95vh] w-[30vw] border-2 border-white border-opacity-10">
        <div className="h-[60vh] w-[full] relative overflow-hidden">
            <img src={props.img} className="h-[60vh] transition-transform duration-700
            hover:scale-150 scale-125 overflow-hidden w-[100vw]"/>
        </div>
        <div className="m-[10px] text-white font-sans font-semibold text-[1.8em]">{props.title}</div>
        <div className="text-slate-600 font-sans text-[1.4em]">{props.desc}  </div>
        <button className="h-[8vh] ml-[2vh] w-[10vw] bg-[#282927] mt-[10px] text-[#c6f324] text-[16px] hover:text-[black] hover:bg-[#c6f324] hover:border-2 border-opacity-35 border-white">READ MORE</button>
        </div>
    )

}