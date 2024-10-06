export default function Items(props) {
    //removing Cart Items
    function RemoveItem(){
        props.Rem(props.data._id);
       
    }
  
    return (
        <div className="m-[50px] h-[30vh] border-b-2 border-opacity-25 border-white  w-[29vw] flex gap-4">
            <div className="h-[20vh] w-[20vh]  ">
                <img src={props.data["imgSrc-src"]?props.data["imgSrc-src"]:`https://ecommerce-z49z.onrender.com/${props.data.imgSrc}`} />
            </div>

            <div className="h-[24vh] w-[15vw] text-left p-[0]">
                <div className="text-[1.4em] text-red-50 ">{props.data.type}</div>
                <div className="text-[1em] text-red-50 ">{props.data.title}</div>
                <div className="text-[1.2em] text-red-300 mt-[10px]" >{props.data.price}</div>
            </div>
            <button className="p-0.6 hover:border-green-400 text-gray-400 k h-[25px] border-2 border-opacity-25 border-white mt-0 w-[24px]" onClick={RemoveItem}>X</button>

        </div>
    )
}