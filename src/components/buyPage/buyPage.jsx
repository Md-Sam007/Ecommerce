import Details from "./Details"
import { useLocation } from "react-router-dom";
import Items from "./Items";
export default function Buy() {
    const location=useLocation();
    const {item,total}=location.state||"";
    
    if(!item){
        
        return(
        <div className="text-center font-sans text-[2.5em]">UnAuthorized Access</div>
    )}
    return (
        <div className="h-[auto] w-[100vw] flex border-t-2 border-opacity-30 bg-[#999999]">
            <Details/>
            <Items data={item} total={total}/>
            
        </div>
    )
}