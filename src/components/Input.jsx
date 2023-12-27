import { useState } from "react";

function Input({value,onchange,name,label,type,required ,extra,align,error ,pattern}) {


    const[focused,setFocusted] = useState(false);

    const handleFocus =(e)=>{

     setFocusted(true);
    }


    const handleInput =(e)=>{

          e.preventDefault();
         setFocusted(false);
         
    }

 return (
   <div className={`flex flex-col gap-2 ${align}`}>
                   <label htmlFor="username" className='text-sm'>
                     {label}<span className='text-[var(--secondarytext)]'>{`${extra}`}</span>
                   </label>
                   <input type={type}  className='border border-[#7676767] rounded block w-full px-[15px] py-[10px] outline-none bg-[var(--primarycolor)]'  name={name} value={value} onChange={onchange} required={required} pattern={pattern}   onBlur={handleFocus} focused={focused.toString()}  onFocus={handleInput}/>
                   <span className='text-red-600 hidden custom-rule'>{error}</span>
               </div>
 ) 
}

export default Input;