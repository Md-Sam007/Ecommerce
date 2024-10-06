export default function ProductList(props){
    
    return(
        <div className="h-[auto]  w-[70vw] mt-[8vmin] ">
                    <ul className=" flex gap-[80px] text-[1.2em] font-sans">
                        <li className="bg-black w-[11vw] h-[6vh] "><img className="h-[12vh]  w-[18vw]" src={props.imageSrc?`https://ecommerce-z49z.onrender.com/${props.imageSrc}`:props.image} alt={"product images"}/></li>
                        <li className="break-words flex w-[34vmin]">{props.title}</li>
                        <li >{props.price}</li>
                        <li>{props.ratings}</li>
                        <li>{props.type}</li>
                        <li><button onClick={()=>{props.Remove(props.id)}} className=" h-[20px] w-[20px] text-black ml-[40px] hover:text-red-700">x</button></li>
                    </ul>

        </div>
    )
}