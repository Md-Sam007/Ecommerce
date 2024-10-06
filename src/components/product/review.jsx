import img_per from "../Login/images/person.webp";
import StarRatings from 'react-star-ratings';
export default function Review(props){
    
    return(
        <div className="absolute top-[85vh] left-[50px] ">
        <h2 className="text-[3em] text-gray-300 font-semibold underline">Review</h2>
        <div className="mt-[40px] flex gap-[30px] pr-[60px]">
            
            <img src={img_per} className="h-[70px]  rounded-[90px]" />
            
            <div>
                <StarRatings rating={props.item.rating} numberOfStars={5} starDimension='20px' starRatedColor='orange' starSpacing='2px' />
                <h2 className="text-gray-300">{props.item.review?props.item.review:"Excellent Product Would Recommend to everyone"}</h2>
            </div>
            
            
            

        </div>
    
    </div>
    )
}