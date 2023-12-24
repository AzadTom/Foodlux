
// eslint-disable-next-line react/prop-types
const ProductCard = ({id,name,img,category,price})=>{


    return(
        <>
         <div>
            
           
            <img src={img} alt="demo"  id={id} className=" w-full h-[300px]   bg-center bg-cover object-cover"/>
           
            <div className="px-4 py-2 bg-[var(--secondarycolor)] flex flex-col gap-4">
                <div className="flex gap-4 items-center  ">
                    <img src="/location.svg" alt="icon" />
                    <h2>{name}</h2>
                </div>
                <div className="flex gap-3 ">
                    
                    <div className="flex gap-2 items-center">
                    <img src="price.svg" alt="icon" />
                    <span>{`$${price}`}</span>
                    </div>
                  
                   
                </div>

                <button className="bg-[var(--primarycolor)] px-4 py-2">Add to cart</button>

            </div>

         </div>
        </>
    )

}

export default ProductCard;