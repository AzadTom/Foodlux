import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/Products/ProductCard';
import { addToFav,removeToFav } from '../reducers/favSlice';
import { addtocart } from '../reducers/cartSlice';


const Wishlist = ()=>{


    const {wishData} = useSelector((state)=>(state.favData));


     const dispatch = useDispatch();

     
    const add =(item)=>{

        dispatch(addtocart(item));

      }

     const addRemoveToFav = (product)=>{


        const isFound =  wishData.find((item)=>(item.id == product.id));

        if(isFound)
        {
           dispatch(removeToFav(product));
        }
        else
        {

           dispatch(addToFav(product));
        }



     }

    return(
        <>
         <section className="flex flex-col gap-4 justify-center items-center p-2">
         <div className="grid grid-cols-1   sm:grid-cols-2  md:grid-cols-3  gap-2 sm:gap-4 justify-between   items-center max-w-[1000px]">
         {wishData.map((item)=>(<ProductCard {...item} key={item.id} add={()=>add(item)} addRemoveToFav={()=> addRemoveToFav(item)}/>))}
         </div>

        </section>
        </>
    )
}


export default Wishlist;