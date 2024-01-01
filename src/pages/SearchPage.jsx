import { useSelector,useDispatch } from 'react-redux';
import ProductCard from '../components/Products/ProductCard';
import {addtocart} from '../reducers/cartSlice.js';

const SearchPage = ()=>{


    const {filterData} = useSelector((state)=>state.filterData);

    const dispatch = useDispatch();


     const add =(item)=>{

        dispatch(addtocart(item));

      }



    return(
        <>
         <section className="flex flex-col gap-4 justify-center items-center p-2">
         <div className="grid grid-cols-1   sm:grid-cols-2  md:grid-cols-3  gap-2 sm:gap-4 justify-between   items-center max-w-[1000px]">
         {filterData.map((item)=>(<ProductCard {...item} key={item.id} add={()=>add(item)}/>))}
         </div>
        </section>
        </>
    )
}

export default SearchPage;