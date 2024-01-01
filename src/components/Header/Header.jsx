import { useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector ,useDispatch} from "react-redux";
import {getFilter} from '../../reducers/filterSlice.js';
import { useState } from "react";



const Header=()=>{


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {cart} = useSelector((state)=>(state.cart));

    const {products} = useSelector((state)=>(state.product));


    const [query,setQuery]= useState("");
    


    const searchPage = (e)=>{

       
           e.preventDefault();

            const filtered =  products.filter((product) => {
            const productName = product.name.toLowerCase();
            return productName.includes(e.target.value.toLowerCase());

          });
        
           dispatch(getFilter(filtered));
          
           navigate("/search");
       

         

    }


    return(
        <>
        <div className="flex justify-between p-4 items-center cursor-pointer ">
            <div onClick={()=> navigate("/")}>
                <h1 className="font-bold text-2xl">FoodLux</h1>
            </div>
            <div className="flex  gap-4">
                 <div className="hidden sm:flex gap-1 items-center">
                    <input type="search" placeholder="Search" className="px-4 py-2 bg-[var(--secondarycolor)] outline-none rounded-xl "  onChange={(e)=> searchPage(e)}  />
                 </div>
                 <button className="flex justify-center items-center " onClick={()=> navigate("/cart")}>
                    <LocalMallIcon/>
                    <span className="text-xs">{cart.length>0 ? (cart.length):("")}</span>
                   </button>
                <button onClick={()=> navigate("/signin")}><AccountCircleIcon/></button>
            </div>
        </div>
        <div className="sm:hidden mx-4 mb-4">
            <input type="search"  className="w-full px-4 py-2 rounded-xl bg-[var(--secondarycolor)] outline-none" placeholder="Search" onChange={(e)=> searchPage(e)}/>
        </div>
        </>
    )

}

export default  Header;