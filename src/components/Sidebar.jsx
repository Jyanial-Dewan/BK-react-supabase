import GlobalContext from "../contexts/GlobalContext";
import { useState, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHamburgerFill } from "react-icons/pi";
import { BsChevronCompactDown } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
    const context = useContext(GlobalContext);
    const { open, setOpen} = context;
    
    const [show, setShow] =useState(true);
  return (
    <div className={open? 'bg-black/50 w-10 h-[100vh] fixed z-30 duration-500 flex flex-col items-center pt-20' : 'bg-black/50 w-40 h-[100vh] fixed z-30 duration-500 flex flex-col pt-20 items-center overflow-auto scrollbar-none md:w-44'} 
    onMouseEnter={()=> setOpen(!open)} 
    onMouseLeave={()=> setOpen(!open)}>
      <div className="flex items-center cursor-pointer text-orange-500 p-2 rounded-md duration-500 hover:bg-white/20">
        <FaHome className=" text-3xl"/>
        <p className={open?"hidden" : "ml-2"}>Home</p>
      </div>

      <div className="h-[1px] w-[80%] my-3 bg-white/30"></div> 

      <div className="flex flex-col">
        <div className="flex items-center mb-2 cursor-pointer text-orange-500 p-2 rounded-md hover:bg-white/20">
            <MdOutlineMobileFriendly className= "text-3xl"/>
            <p className={open?"hidden" : "ml-2"}>Order</p>
        </div>

        <div className="flex items-center mb-2 cursor-pointer text-orange-500 p-2 rounded-md hover:bg-white/20">
            <BiSolidOffer className="text-3xl"/>
            <p className={open?"hidden" : "ml-2"}>Offers</p>
        </div>

        <div className="flex items-center cursor-pointer text-orange-500 p-2 rounded-md hover:bg-white/20">
            <TbTruckDelivery className="text-3xl"/>
            <p className={open?"hidden" : "ml-2"}>Delivery</p>
        </div>
      </div>

      <div className="h-[1px] w-[80%] my-3 bg-white/30"></div>

      <div className="flex items-center cursor-pointer text-orange-500 p-2 rounded-md hover:bg-white/20">
            <PiHamburgerFill className="text-3xl"/>
            <p className={open?"hidden" : "mx-2"}>Burgers</p>
            <BsChevronCompactDown className={open? "hidden" : "text-orange-500 text-md cursor-pointer"} onClick={()=> setShow(!show)}/>
      </div>  

      <ul className={show || open ? "hidden duration-500": "mt-2 duration-500"}>
        <li className="text-white hover:text-orange-500 cursor-pointer">Poppercorn Angus</li>
        <li className="text-white hover:text-orange-500 cursor-pointer">Steakhouse Angus</li>
        <li className="text-white hover:text-orange-500 cursor-pointer">Whopper</li>
        <li className="text-white hover:text-orange-500 cursor-pointer">Double Whopper</li>
        <li className="text-white hover:text-orange-500 cursor-pointer">Chicken Royale</li>
        <li className="text-white hover:text-orange-500 cursor-pointer">Vegan Royale</li>
      </ul>

      <div className="h-[1px] w-[80%] my-3 bg-white/30"></div>

      <div className="flex items-center cursor-pointer text-orange-500 p-2 rounded-md hover:bg-white/20">
            <FaUser className="text-3xl"/>
            <p className={open?"hidden" : "ml-2"}>User</p>
        </div>
      
    </div>
  )
}

export default Sidebar
