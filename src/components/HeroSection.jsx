
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
            <Header/>
            <section className="flex  gap-4 p-8  overflow-x-scroll w-full">
            {images.map((item)=>{

                return <SlideCard item={item} curr={curr}/>
            })

            }
            </section>
        </>
    )
}

export default HeroSection;
