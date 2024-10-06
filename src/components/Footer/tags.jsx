export default function Tags(props){
    return(
        <div>
             <div className="text-[1.6em] text-white font-sans font-medium">{props.Title}</div>
                <ul className="text-[1.3em] text-gray-500 mt-[25px] font-semibol ">
                    <li>{props.first}</li>
                    <li>{props.second}</li>
                    <li>{props.third}</li>
                    <li>{props.fourth}</li>
                    <li>{props.fifth}</li>

                </ul>
        </div>
    )
   

}