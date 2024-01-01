import { useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";



const Header=()=>{


    const navigate = useNavigate();

    const {cart} = useSelector((state)=>(state.cart));



    return(
        <>
        <div className="flex justify-between p-4 items-center cursor-pointer ">
            <div onClick={()=> navigate("/")}>
                <h1 className="font-bold text-2xl">FoodLux</h1>
            </div>
            <div className="flex  gap-4">
                 <div className="flex gap-1 items-center">
                    <SearchIcon/>
                 </div>
                 <button className="flex justify-center items-center " onClick={()=> navigate("/cart")}>
                    <LocalMallIcon/>
                    <span className="text-xs">{cart.length>0 ? (cart.length):("")}</span>
                   </button>
                <button onClick={()=> navigate("/signin")}><AccountCircleIcon/></button>
            </div>
        </div>
        </>
    )

}

export default  Header;