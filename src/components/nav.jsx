import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-scroll";

function Nav(props){
    return(
        
        <nav className="h-[12vh] w-[100vw] bg-blue-400 fixed z-[1] pl-3 border-b border-gray-200 border-opacity-40 backdrop-blur bg-opacity-10">
            <div className="absolute top-[20px] text-gray-300  text-[30px]"> Game on</div>
            <Link to="section1" smooth={true} duration={600}><div className="absolute  h-[12vh] w-[90px] pt-6 pl-3 left-[40vw] text-[25px] cursor-pointer hover:bg-gray-900 text-gray-300 ">Home</div></Link>
            <Link to="section2" smooth={true} duration={600}><div className="absolute  h-[12vh] w-[90px] pt-6 pl-3 left-[48vw] text-[25px] cursor-pointer  hover:bg-gray-900  text-gray-300  ">Shop</div></Link>
            <Link to="section3" smooth={true} duration={800}>  <div className="absolute  h-[12vh] w-[90px] pt-6 pl-3 left-[54vw] text-[25px] cursor-pointer  hover:bg-gray-900  text-gray-300">Blog</div></Link> 
            <div className='absolute top-6 opacity-50 cursor-pointer left-[93vw]' onClick={()=>{props.cart()}}><ShoppingCartIcon sx={{height:"6vmin",width:"6vmin",color:"#0047AB"}}/></div>
            
        </nav>
       
    )
}
export default Nav;