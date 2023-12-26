

const VideoCta=()=>{


    

    const videos =[
        {
            id:1,
            video:"/video.mp4"
        }

    ];


   

    


    return(
        <>
        <div className="relative">
        <video src={videos[0].video} autoPlay loop muted  className="w-full h-[80vh] object-cover"></video>
        <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 text-white">
            <h2 className="sm:text-8xl font-bold text-5xl">FoodLux</h2>
            <h3 className="sm:text-xl font-medium text-sm">Welcome to Our near Outlets!</h3>
        </div>
        </div>
        
        </>
    )
}


export default VideoCta;
