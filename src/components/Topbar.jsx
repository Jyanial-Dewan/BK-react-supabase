import logo from "../images/burger-king.png";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";
import { useNavigate} from "react-router-dom"

const Topbar = () => {
    const context = useContext(GlobalContext);
    const {token} = context;
    const navigate = useNavigate()

    const handleLogOut = ()=>{
        sessionStorage.removeItem(token)
        
        navigate('/')
    }

  return (
    <div className="w-full h-16 fixed z-20">
      <div className="w-[80%] mx-auto grid grid-cols-2 h-full border-b border-white/50">
      <img src={logo} alt="Burger King Logo" className="w-10 h-10 justify-self-end self-center" />
      <button onClick={handleLogOut} className="bg-orange-600 text-white rounded-md w-[100px] h-[35px] justify-self-end self-center hover:bg-orange-500">
        Log Out
      </button>
      </div>

      
    </div>
  )
}

export default Topbar
