import Products from '../components/Products/Products';
import Cta from '../components/Cta/Cta';
import Blogs from '../components/Blogs/Blogs';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import Mobile from '../components/Header/Mobile';

const Home = ()=>{


   

      
    return(
       <>
       <Mobile/>
       <HeroSection/>
        <Products/>
        <Cta/>
        <Blogs/>
        <Faq/>
        <Footer/>
       </>
      )


}

export default Home;