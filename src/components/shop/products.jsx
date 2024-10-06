import StarRatings from 'react-star-ratings'
export default function Product(props){
  
   
    return(
    <div className=" h-[auto] flex-col w-[32vw] border-2 border-white border-opacity-30 ">
        <img src={props.data.imgSrc?`https://ecommerce-z49z.onrender.com/${props.data.imgSrc}`:props.data["imgSrc-src"]} className="w-[32vw] " />
        <div className=" h-full w-[31.8vw]  cursor-pointer bordet-t-2 mt-2 border-white border-opacity-30">
            <h4 className="text-[20px] hover:underline text-gray-200 ">{props.data.title}</h4>
            <div ><StarRatings rating={props.data.rating} numberOfStars={5} starDimension='30px' starRatedColor='orange' starSpacing='2px' /></div>
            <div className='text-[30px] text-green-400'>{props.data.price}</div>
        </div>
        

    </div>
    )
}
