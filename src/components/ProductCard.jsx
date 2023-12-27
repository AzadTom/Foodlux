import FastfoodIcon from '@mui/icons-material/Fastfood';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';


const ProductCard = ({id,name,img,category,price})=>{


    return(
        <>
         <div className="border border-[var(--secondarycolor)] rounded-2xl">
            
           
            <img src={img} alt="demo"  id={id} className=" w-full h-[300px]   bg-center bg-cover object-cover rounded-t-2xl" loading='lazy'/>
           
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

                <button className="bg-[var(--primarytext)]  text-[var(--neutral)] px-4 py-2 rounded-md font-medium  w-full text-sm">Add to cart</button>

            </div>

         </div>
        </>
    )

}

export default ProductCard;