import Hero from '../components/Hero';
import Products from '../components/Products';
import Cta from '../components/Cta';
import Blogs from '../components/Blogs';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import MobileNav from '../components/MobileNav';
import VideoCta from '../components/VideoCta';

const Home = ()=>{


   

      
    return(
       
      
       <>
        <VideoCta/>
       <HeroSection/>
        <Products/>
        <Cta/>
        <Blogs/>
        <Faq/>
        <Cta/>
        <Footer/>
        <MobileNav/>

       
       </>
      
      
        
    )


}

export default Home;