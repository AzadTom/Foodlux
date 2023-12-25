import FastfoodIcon from '@mui/icons-material/Fastfood';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';

// eslint-disable-next-line react/prop-types
const ProductCard = ({id,name,img,category,price})=>{


    return(
        <>
         <div className="border border-[var(--secondarycolor)] rounded-2xl">
            
           
            <img src={img} alt="demo"  id={id} className=" w-full h-[300px]   bg-center bg-cover object-cover rounded-t-2xl"/>
           
            <div className="px-4 py-8 bg-[var(--neutralblack)] flex flex-col gap-4 rounded-b-2xl">
                <div className="flex gap-4 justify-between items-center  ">
                   <div>
                   <FastfoodIcon/>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                   </div>
                   <div className='flex items-center gap-1 bg-green-600 p-2'>
                    <StarIcon/>
                    <span className='text-sm '>5 star</span>
                   </div>
                </div>
                <div className="flex gap-3 ">
                    
                    <div className="flex gap-2 items-center">
                    <SellIcon/>
                    <span>{`$${price}`}</span>
                    </div>
                  
                   
                </div>

                <button className="bg-[var(--primarycolor)] px-4 py-2 rounded-md">Add to cart</button>

            </div>

         </div>
        </>
    )

}

export default ProductCard;