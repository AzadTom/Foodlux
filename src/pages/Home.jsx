import Hero from '../components/Hero';
import Products from '../components/Products';
import Cta from '../components/Cta';
import Blogs from '../components/Blogs';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Home = ()=>{


    return(
       
      
       <section className='relative'>
       <HeroSection/>
        <Products/>
        <Cta/>
        <Blogs/>
        <Faq/>
        <Footer/>

        <span className='hidden  fixed  m-4 right-0 bottom-4 bg-[var(--neutralblack)] sm:flex flex-col justify-center items-center px-4 py-2 w-12 h-12 rounded-[50%]  cursor-pointer border border-[var(--primarycolor)]'>
        <LightModeIcon/>
        </span>
       </section>
      
      
        
    )


}

export default Home;