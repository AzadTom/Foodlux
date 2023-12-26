import Hero from '../components/Hero';
import Products from '../components/Products';
import Cta from '../components/Cta';
import Blogs from '../components/Blogs';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import MobileNav from '../components/MobileNav';

const Home = ()=>{


   

      
    return(
       
      
       <section className='relative'>
       <HeroSection/>
        <Products/>
        <Cta/>
        <Blogs/>
        <Faq/>
        <Footer/>
        <MobileNav/>

       
       </section>
      
      
        
    )


}

export default Home;