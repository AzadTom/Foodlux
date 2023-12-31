import { useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';



const Header=()=>{


    const navigate = useNavigate();

    return(
        <>
        <div className="flex justify-between p-4 items-center cursor-pointer">
            <div onClick={()=> navigate("/")}>
                <h1 className="font-bold text-2xl">FoodLux</h1>
            </div>
            <div className="flex  gap-4">
                 <div className="flex gap-1 items-center">
                    <SearchIcon/>
                 </div>
                 <button className="flex gap-1 items-center">
                    <LocalMallIcon/>
                   </button>
                <button onClick={()=> navigate("/signin")}><AccountCircleIcon/></button>
            </div>
        </div>
        </>
    )

}

export default  Header;