import react,{useState ,useEffect} from 'react';
import img2 from "../Login/images/short.jpg";


export default function Img() {
    const [img_pos,setPos]=useState("")
    const handdleScroll=()=>{
        const scrollVal=window.scrollY;

        if(scrollVal>1800&&scrollVal<3500){
            setPos('fixed' );
        }
        else if(scrollVal>3500){
            setPos('mt-[180vh]')
        }

        else{
            setPos('');
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handdleScroll)
        return ()=>{
            window.removeEventListener('scroll',handdleScroll);
        }

    },[])
    return (
        <div className={`${img_pos} top-[10px] h-[20vh] w-[28w] `} >
            <img src={img2} alt="elden ring" className="h-[90vh]  w-[29.9vw]" />
        </div>

    )
}
