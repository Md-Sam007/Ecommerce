
import FooterR from "./FooterR"
import FooterL from "./FooterL";
import CopyRight from "./CopyRight";
export default function Footer(){
    return(
        <div className="h-auto w-[100vw] pl-[5vmin] pr-[5vmin] border-t-2  border-white bg-[#141415] border-opacity-30"  >
            <div className="h-auto w-[95vw] border-l-2 border-r-2 mt-2 pt-[10vh] flex gap-[60px] border-white border-opacity-30">
                <FooterL/>
                <FooterR/>
            </div>
            <CopyRight/>
            
        </div>
    )
}