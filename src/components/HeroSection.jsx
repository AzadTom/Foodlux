
import { useEffect, useState } from 'react';
import Header from './Header';
import SlideCard from './SlideCard';

const HeroSection = () => {



    const images = [

        "https://images.unsplash.com/photo-1605926637412-b0cd5a3e3543?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1510195429239-8a5c0222144a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1605926637412-b0cd5a3e3543?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1510195429239-8a5c0222144a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
        
    ];


     const[curr,setCurr] = useState(0);

     const prev =()=> setCurr((curr)=> (curr===0?images.length-1:curr-1));

     const next=()=> setCurr((curr)=> (curr===images.length-1?0:curr+1));


      useEffect(()=>{

        const slideInterval =setInterval(next,3000);

        return ()=> clearInterval(slideInterval);

      },[])



    return (
        <>
            <h2 className='text-2xl font-semibold my-8 mx-4 flex flex-col gap-2 justify-center items-center'><span>Popular Food Item</span> <span className='text-xs font-thin bg-green-600 px-2 py-1'>Today</span></h2>
            <section className="flex   overflow-x-scroll w-full sm:p-8 sm:gap-4 ">
            {images.map((item)=>{

                return <SlideCard item={item} curr={curr} prev={()=> prev()} next={()=> next()}/>
            })

            }
            </section>
        </>
    )
}

export default HeroSection;
