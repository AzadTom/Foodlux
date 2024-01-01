import { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeButton =()=>{


    const[mode,setMode] = useState(true);

    const changeMode =(e)=>{

    e.preventDefault();

    const theme = document.querySelector("body");

     theme.classList.toggle("light");

     setMode(prev=>!prev); 

  }

    return(
        <>
         <span className='hidden  fixed  m-4 right-0 bottom-4 bg-[var(--neutralblack)] sm:flex flex-col justify-center items-center px-4 py-2 w-12 h-12 rounded-[50%]  cursor-pointer border border-[var(--primarycolor)]' id='mode' onClick={(e)=>changeMode(e)}>
        {mode?(<LightModeIcon/>):(<DarkModeIcon/>)}
        </span>
        </>
    )
}


export default ThemeButton;

