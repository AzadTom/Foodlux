import '../App.css';
import Carousel from './Carousel';
import Header from './Header';


const Hero = () => {


  const images = [

    "https://images.unsplash.com/photo-1605926637412-b0cd5a3e3543?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1564436872-f6d81182df12?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1510195429239-8a5c0222144a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
   ];




    return (
        <>
            <Header />
            <Carousel images={images} />
           
        </>
    )


}

export default Hero;





