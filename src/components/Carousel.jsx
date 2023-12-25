import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Carousel({images}) {

  const navigate = useNavigate();

  const[currentIndex,setCurrentIndex] = useState(0);
  useEffect(()=>{

      const interval = setInterval(() => {

          setCurrentIndex((previndex)=> (previndex+1) % images.length);

          
      }, 3000);

      return ()=> clearInterval(interval);

  },[images.length]);



  return (
    <section>
        <div style={{ backgroundImage: `url("${images[currentIndex]}")`}}
         className='bg-cover  bg-no-repeat  bg-top w-full h-[34rem] flex flex-col justify-center  items-center  gap-2   relative'>
         <div className='flex flex-col gap-2 justify-center items-center z-50'>
         <h2 className=' text-3xl md:text-6xl font-semibold '>FoodLux</h2>
                     <div className='flex flex-col gap-2 '>
                     <p className='text-sm md:text-3xl font-thin tracking-wider'>Discover the best food & drinks</p>
                    <input type="search" placeholder='Search foods & drinks'  className='px-4 py-2 text-black' />
                     </div>
              
         </div>
      <div className="h-1/2  linear-up absolute w-screen left-0 bottom-0 z-10"></div>
      <div className="absolute z-50 bottom-4 flex gap-2 " >
          <span className={  images[currentIndex] == images[0] ? "bg-white rounded-[50px] w-3 h-3" : " border-white border-2 rounded-[50px] w-3 h-3" }></span>
          <span className={images[currentIndex] == images[1] ? "bg-white rounded-[50px] w-3 h-3" : " border-white border-2 rounded-[50px] w-3 h-3"}></span>
          <span className={images[currentIndex] == images[2] ? "bg-white rounded-[50px] w-3 h-3" : " border-white border-2 rounded-[50px] w-3 h-3"}></span>
      </div>

        
        </div>

        
    </section>
  )
}

export default Carousel;