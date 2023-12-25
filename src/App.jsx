import Home from "./pages/Home";
import Food from './pages/Food';
import Search from './pages/Search';
import Account from './pages/Account';
import { Routes,Route } from "react-router-dom";
import Loading from "./components/Loading";
import { Suspense} from "react";
import MobileNav from "./components/MobileNav";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loading/>}><Home/></Suspense>}/>
      <Route path="/food" element={<Suspense fallback={<Loading/>}><Food/></Suspense>}/>
      <Route path="/search" element={<Suspense fallback={<Loading/>}><Search/></Suspense>}/>
      <Route path="/account" element={<Suspense fallback={<Loading/>}><Account/></Suspense>}/>
    </Routes>
    <MobileNav/>
    </>
  );
}

export default App;
