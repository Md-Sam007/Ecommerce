export default function Model(props){
    return(
        <div className="h-[100vh] w-[100vw] fixed ">
                <div className="h-[40vh] w-[40vw] bg-[#d1cfcf] ml-[30vmin] mt-[10vmin] relative text-center p-[40px] rounded-xl">
                    <span className="text-[2em] ">Are you Sure You Want To Delete This Product</span>
                    <button className="h-[8vmin] w-[14vmin] rounded-xl absolute left-[20vmin] hover:text-red-600 top-[22vmin] bg-[white]" onClick={()=>{props.Confirm(false)}}>No</button>
                    <button className="h-[8vmin] w-[14vmin] rounded-xl absolute left-[55vmin] top-[22vmin] hover:text-red-700 bg-[white]" onClick={()=>{props.Confirm(true)}}>Yes</button>
                </div>
        </div>
    )
}