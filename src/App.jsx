import Home from "./pages/Home";
import Food from './pages/Food';
import Search from './pages/Search';
import Account from './pages/Account';
import { Routes,Route } from "react-router-dom";
import Loading from "./components/Loading";
import { Suspense} from "react";
import MobileNav from './components/MobileNav';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import Header from "./components/Header";




function App() {

  const[mode,setMode] = useState(true);

  const changeMode =(e)=>{

    e.preventDefault();

    const theme = document.querySelector("body");

     theme.classList.toggle("light");

     setMode(prev=>!prev); 

  }

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loading/>}><Home/></Suspense>} />
      <Route path="/food" element={<Suspense fallback={<Loading/>}><Food/></Suspense>}/>
      <Route path="/search" element={<Suspense fallback={<Loading/>}><Search/></Suspense>}/>
      <Route path="/account" element={<Suspense fallback={<Loading/>}><Account/></Suspense>}/>
      <Route path="/signup" element={<Suspense fallback={<Loading/>}><SignUp/></Suspense>}/>
      <Route path="/signin" element={<Suspense fallback={<Loading/>}><SignIn/></Suspense>}/>
    </Routes>
    <span className='hidden  fixed  m-4 right-0 bottom-4 bg-[var(--neutralblack)] sm:flex flex-col justify-center items-center px-4 py-2 w-12 h-12 rounded-[50%]  cursor-pointer border border-[var(--primarycolor)]' id='mode' onClick={(e)=>changeMode(e)}>
        {mode?(<LightModeIcon/>):(<DarkModeIcon/>)}
        </span>
    
    </>
  );
}

export default App;
