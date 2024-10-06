export default function Oders(props) {
    return (
        <div className="h-[10vh] w-[40vw] mb-[30px] flex ">

            <img className="rounded-l" src={props.image?props.image:`http://localhost:4000/${props.imgSrc}`} height={"140px"} width={"120px"} />

            <div>
                <div className="text-[1.2em] font-sans ml-[20px] font-bold text-white">{props.type}</div>
                <div className="text-[1.2em] ml-[25px] font-bold text-white">{props.rating}</div>
            </div>
            <div className="text-[1.6em] font-sans ml-[24vw] font-bold text-white">{props.price}</div>
        </div>
    )
}