import { useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MobileNav=()=>{


     const navigate = useNavigate();

    return(
        <>

        <section className="sm:hidden flex justify-between  items-baseline px-4 py-2 sticky bottom-0 bg-[var(--primarycolor)] border-t border-[var(--secondarycolor)] cursor-pointer z-50">
            <div className="flex flex-col gap-1 justify-center items-center" onClick={()=> navigate("/")}>
                <div className="w-[16px]">
                    <FastfoodIcon/>
                </div>
                <h2 className="text-xs font-thin">Home</h2>
            </div>

            <div  className="flex flex-col gap-1 justify-center items-center  " onClick={()=> navigate("/property")}>
                <div className="w-[16px]">
                    <LocalMallIcon  />
                </div>
                <h2 className="text-xs font-thin">Cart</h2>
            </div>

            

            <div  className="flex flex-col gap-1 justify-center items-center" onClick={()=> navigate("/agents")}>
                <div className="w-[16px]">
                    <SearchIcon/>
                </div>
                <h2 className="text-xs font-thin">Search</h2>
            </div>

            <div  className="flex flex-col  gap-1 justify-center items-center" onClick={()=> navigate("/about")}>
                <div className="w-[16px]">
                    <AccountCircleIcon />
                </div>
                <h2 className="text-xs font-thin">Account</h2>
            </div>
        </section>

        </>
    )

}


export default MobileNav;