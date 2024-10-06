

const prod=["Chair","Controller","Game Desks","Graphics Card" ,"Headphone","Headset","Keyboard","Mouse","Weel"];

export default function AddProducts(){
    
    
  
    return(
        <div className="h-[100vh] w-[79vw] bg-[#EEEEEE] p-[10vmin]">
            <div className="h-[86vh] rounded-[30px] w-[55vw] bg-white flex-row gap-[20px] p-[6vmin]">
                <form method="POST" action="https://ecommerce-z49z.onrender.com/AddProducts" enctype="multipart/form-data">
                    <label className=" text-[1.2em] text-[#a1a0a0] ">Product Title</label>
                    <input name="title" className=" h-[8vh] w-[50vw] border-2 p-[10px] border-opacity-40 border-[#a1a0a0] mt-[20px] outline-none text-[1.2em]"  placeholder="Type Here"/>
                    
                    <div className="mt-[20px] flex gap-[50vmin]">
                        <label className=" text-[1.2em] text-[#a1a0a0] ">Price</label>
                        <label className=" text-[1.2em] text-[#a1a0a0] ">Ratings</label>
                    </div>
                    <div className="mt-[20px] flex mb-[20px] gap-[13vmin]">
                        <input name="price" className="h-[6vh] w-[20vw] border-2 p-[10px] border-opacity-40 border-[#a1a0a0] outline-none " placeholder="Type Here"/>
                        <input   name='rating'
                         className="h-[6vh] w-[20vw] border-2 p-[10px] border-opacity-40 border-[#a1a0a0] outline-none " placeholder="Type Here"/>
                    </div>
                    <label className=" text-[1.2em] text-[#a1a0a0] mt-8 ">Category</label>
                    <div >
                        
                        <select name="type" className="h-[50px] w-[20vmin] text-[0.9em] mt-[20px] outline-none border-2 border-opacity-40 border-[#a1a0a0]" >
                      
                      <option  value={"TypeGaming Laptop"}>Gaming Laptop</option>
                      {prod.map((val,index)=>{return(<option key={index}  value={val}>{val}</option>)})}
                  </select>

                    </div>
                    <div className="mt-[20px]">
                        <label className=" text-[1.2em] text-[#a1a0a0] mt-[20px] ">Ratings</label>
                    </div>
                    <input className="mt-[20px]" type="file" name="file" />
                   
                   <div>
                    <input type="submit" className="h-[7vmin] w-[20vmin] rounded-[50px] mt-[20px] bg-[#24A0ED] hover:bg-black hover:text-[#24A0ED] hover:cursor-pointer" value={"ADD"} />
                   </div>
                  
                        
                        
                    
                </form>
            </div>
            
        </div>
    )
}