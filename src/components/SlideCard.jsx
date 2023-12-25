
import StarIcon from '@mui/icons-material/Star';

const SlideCard =({item})=>{


    return(
        <>
        <div className='flex-none w-full flex-col sm:flex-row flex justify-center items-center bg-[var(--neutralblack)] border border-[var(--secondarycolor)] rounded-3xl sm:p-8'>

        <div className="w-full flex-1 ">
        <img src={item} alt="heroImg"  className='w-full h-[320px] rounded-t-3xl sm:rounded-3xl  bg-cover bg-center object-cover'/>
    </div>
    <div className="flex-1 flex flex-col gap-2 p-4 justify-center items-start">
    <h3 className="text-xl font-semibold">FoodLux</h3>
        <h2 className="text-6xl font-bold">Chicken Chopri</h2>
        <h3 className="text-xl font-medium text-[var(--primarytext)]  bg-green-600 p-2"> <StarIcon/> <span>5 star</span></h3>
            <p className="font-thin text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequuntur repudiandae facilis repellat quaerat voluptate doloremque. 
                Nostrum, eligendi consectetur nobis, sequi voluptates repellat sed at odio 
                cumque sunt ab veniam ipsa, itaque beatae dolorum.</p>
    </div>
            
        </div>
       

        </>
    )

}


export default SlideCard;