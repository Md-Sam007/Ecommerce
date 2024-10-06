export default function CopyRight(){
    const date=new Date();
    const year=date.getFullYear();
    return(
        <div className="flex gap-[10px] w-[full] h-auto border-2 border-white border-opacity-30">
            <div className="h-[9vh] w-[20vw] font-semibold text-[1.2em] text-gray-500 mt-[4vmin] p-[20px]">
                Terms & Conditions
                </div>
            <div className="h-[9vh] w-[20vw] mt-[4vmin] p-[20px] font-semibold text-[1.2em] text-gray-500 border-l border-white border-opacity-30">
                Privacy Policy
            </div>
            <div className="text-gray-500 text-[1.2em] mt-[6vmin]">All Right Reserved © {year} Designthemes</div>
        </div>
    )
}