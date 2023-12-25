import { useNavigate } from "react-router-dom";

const Header=()=>{


    const navigate = useNavigate();

    return(
        <>
        <div className="flex justify-between p-4 items-center  bg-[var(--neutralblack)]">
            <div>
                <h1 className="font-bold text-2xl">FoodLux</h1>
            </div>
            <div>
                <button className="border border-white px-4 py-2 ">Login</button>
            </div>
        </div>
        </>
    )

}

export default  Header;