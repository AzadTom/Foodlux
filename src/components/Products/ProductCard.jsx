import FastfoodIcon from '@mui/icons-material/Fastfood';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({id,name,img,category,price,add})=>{


    
    const navigate = useNavigate();
     
     const {cart} = useSelector((state)=>(state.cart));



     const isMatch = cart && cart.find((item)=> (item.id === id));



    return(
        <>
         <div className="border border-[var(--secondarycolor)] rounded-2xl shadow-md hover:shadow-lg ">
            
           
            <img src={img} alt="demo"  id={id} className=" w-full h-[300px]   bg-center bg-cover object-cover rounded-t-2xl " loading='lazy'/>
           
            <div className=" px-2 sm:px-4 py-4 sm:py-8  flex flex-col  gap-4   ">

                <div className="flex  justify-between items-center  ">
                    {/* title */}
                   <div>
                   <FastfoodIcon/>
                    <h2 className='sm:text-2xl font-semibold'>{name}</h2>
                   </div>
                   {/* rating */}
                   <div className='flex  flex-row  items-center justify-center gap-1 bg-green-600 sm:text-[var(--primarytext)] p-2'>
                    <StarIcon/>
                    <span className='text-xs sm:text-sm'>5 star</span>
                   </div>

                </div>

                <div className="flex gap-3 ">
                    
                    <div className="flex gap-2 items-center">
                    <SellIcon/>
                    <span>{`$${price}`}</span>
                    </div>
                  
                   
                </div>

                {isMatch?(<button className="bg-[var(--primarytext)]  text-[var(--neutral)] px-4 py-2 rounded-md font-medium  w-full text-sm hover:scale-90 transition ease-in-out duration-300" onClick={()=> navigate("/cart")}>GoTocart</button>)
                :(<button className="bg-[var(--primarytext)]  text-[var(--neutral)] px-4 py-2 rounded-md font-medium  w-full text-sm hover:scale-90 transition ease-in-out duration-300" onClick={()=> add()}>AddTocart</button>)}

            </div>

         </div>
        </>
    )

}

export default ProductCard;