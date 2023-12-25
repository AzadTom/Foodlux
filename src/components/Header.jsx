import { useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Header=()=>{


    const navigate = useNavigate();

    return(
        <>
        <div className="flex justify-between p-4 items-center  bg-[var(--primarycolor)]">
            <div>
                <h1 className="font-bold text-2xl">FoodLux</h1>
            </div>
            <div className="flex gap-4">
                 <div className="flex gap-1 items-center">
                    <img src="/searchw.svg" alt="search"  width={16} height={16}/>
                    <span className="hidden sm:block">Search</span>

                 </div>
                 <button className="flex gap-1 items-center">
                    <LocalMallIcon/>
                    <span>Cart</span></button>
                <button className="border border-white px-4 py-2 ">Login</button>
            </div>
        </div>
        </>
    )

}

export default  Header;