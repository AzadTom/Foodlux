import { useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header=()=>{


    const navigate = useNavigate();

    return(
        <>
        <div className="flex justify-between p-4 items-center">
            <div>
                <h1 className="font-bold text-2xl">FoodLux</h1>
            </div>
            <div className=" hidden sm:flex  gap-4">
                 <div className="flex gap-1 items-center">
                    <img src="/searchw.svg" alt="search"  width={16} height={16}/>
                 </div>
                 <button className="flex gap-1 items-center">
                    <LocalMallIcon/>
                   </button>
                <button><AccountCircleIcon/></button>
            </div>
        </div>
        </>
    )

}

export default  Header;