import { Suspense ,lazy} from "react";
import { Routes,Route } from "react-router-dom";

// other components
import Header from "./components/Header/Header";
import Loading from "./components/Others/Loading";
import ThemeButton from './components/HeroSection/ThemeButton';



// pages components
const Home  = lazy(()=> import("./pages/Home"));
const SignUp = lazy(()=> import("./pages/SignUp"));
const SignIn = lazy(()=> import("./pages/SignIn"));
const Cart  = lazy(()=> import("./pages/CartPage"));
const SearchPage = lazy(()=>import("./pages/SearchPage"));
const Wishlist = lazy(()=> import("./pages/Wishlist"));




function App() {

  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loading/>}><Home/></Suspense>} />
      <Route path="/signup" element={<Suspense fallback={<Loading/>}><SignUp/></Suspense>}/>
      <Route path="/signin" element={<Suspense fallback={<Loading/>}><SignIn/></Suspense>}/>
      <Route path="/cart" element={<Suspense fallback={<Loading/>}><Cart/></Suspense>}/>
      <Route path="/search" element={<Suspense fallback={<Loading/>}><SearchPage/></Suspense>}/>
      <Route path="/fav" element={<Suspense fallback={<Loading/>}><Wishlist/></Suspense>}/>
    </Routes>
    <ThemeButton/>
    </>
  );
}

export default App;
