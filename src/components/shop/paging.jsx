import {useEffect, useState} from "react";



export default function Pagging(props){
    const [pageNo,setPage]=useState(1);
    useEffect(()=>{
        props.pagging(pageNo)
        window.scroll({
            left:0,
            top:1000,
        })

    },[pageNo])

    

    return(
        <div>
            <div className="mt-[3vh] flex  ml-[20vw] h-[7vh] justify-between w-[20vw] ">
                <button className={`h-[7vh] text-[40px]  w-[5vw] text-white hover:text-red-300 ${pageNo<2?"invisible":"visible"}`}  onClick={()=>{setPage(prev=>prev-1)}}>&lt;</button>
                <div className="h-[7vh] w-[5vw] text-[40px] ml-[60px] text-white">{pageNo}</div>
                {props.pageLimit===8?<button className="h-[7vh] w-[5vw] text-[40px] text-white hover:text-red-300" onClick={()=>{setPage(prev=>prev+1)}}>&gt;</button>:null}

            </div>
            
        </div>
    )
}