import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input';


function SignUp() {

  const navigate = useNavigate();


    const [userDetails,setUserDetails] = useState({
      first:"",
      last:"",
      username:"",
      email:"",
      password:"",
      comfirm:"",
    });



    const inputName = [{
      id :1,
      name:"first",
      label:"First name",
      type:"text",
      placeholder:"First name",
      pattern:"^[A-Za-z0-9]{3,16}$",
      extra:"",
      required:true,
      error:"invalid firstname"
    },
    {
      id :2,
      name:"last",
      label:"Last name",
      type:"text",
      pattern:"^[A-Za-z0-9]{3,16}$",
      placeholder:"Last name",
      extra:"",
      required:true,
      error:"invalid lastname"
    }
  ]

    const inputs = [
  {

    id :4,
    name:"email",
    label:"Email",
    type:"email",
    placeholder:"Email",
    required:true,
    pattern :"^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$",
    extra:"",
    error:"invalid email address!"
},
  {

    id :5,
    name:"password",
    label:"Password",
    type:"password",
    placeholder:"Password",
    required:true,
    extra:"(min 8 char.)",
    error:"password should at least 8 character!",
    pattern :"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
   
},
{

  id :6,
  name:"comfirm",
  label:"Comfirm password",
  type:"password",
  placeholder:"Comfirm password",
  required:true,
  extra:"(min 8 char.)",
  error:"password should at least 8 character!",
  pattern :userDetails.password
},
  ];



  const onchanage = (e)=>{

      setUserDetails({...userDetails,[e.target.name]:e.target.value});
      
  }





  return (
    <div className='flex    items-center justify-center   w-full h-screen  '>

            
         <form className='max-w-[800px]  flex flex-col justify-center    p-[2rem] gap-4 rounded-md '>

                <h1 className='text-3xl   font-semibold'>FoodLux</h1> 
                <h2 className='text-xl  '>Let's create an account </h2>

              <div className='flex  gap-4  '>
              {
                inputName.map((input)=>(
                  <Input key={input.id} {...input} onchange={onchanage} value={userDetails[input.name]} align={"flex-1"}/>
                ))
              }
              </div>

              {inputs.map((input)=>(
                <Input key={input.id} {...input} onchange={onchanage} value={userDetails[input.name]} align={" "}/>
              ))
            } 
          <div className='flex flex-col justify-center   gap-2 '>
          <button className='px-[20px] py-[10px] bg-black text-white rounded-md'>Signup</button>
            <p className='text-center cursor-pointer' onClick={()=> navigate("/signin")}>Already have an account?LogIn</p>
          </div>
            <div className='flex  flex-col  justify-center text-center gap-2  '>
                     <span className='text-sm text-gray-400'>OR</span>
                <button className='px-[20px] py-[10px] bg-black text-white rounded-md flex  justify-center  gap-1 '> <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="google" width={24} height={24} /></button>
                </div>
         </form>

    </div>
  )
}

export default SignUp;