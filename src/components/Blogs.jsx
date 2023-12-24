import BlogCard from "./BlogCard";

const Blogs=()=>{



    const blogs=[
        {
          id: 11,
          name: "Dosa",
          img: "https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg",
          category: "food",
          price: 270,
        },
        {
          id: 7,
          name: "Idli/Sambhar",
          img: "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
          category: "food",
          price: 180,
        },
        {
          id: 8,
          name: "Dal Makhni",
          img: "https://recipes.timesofindia.com/thumb/53097626.cms?width=1200&height=900",
          category: "food",
          price: 180,
        },
      
        {
          id: 9,
          name: "Cold Coffee",
          img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/cold-coffee-recipe-2.jpg",
          category: "beverages",
          price: 80,
        },
        {
          id: 10,
          name: " Tea",
          img: "https://static.toiimg.com/photo/83173328.cms",
          category: "beverages",
          price: 30,
        },
      
        {
          id: 2,
          name: " Coke",
          img: "https://5.imimg.com/data5/SELLER/Default/2021/12/MI/CM/OC/26602448/300-ml-coke-original-500x500.jpg",
          category: "beverages",
          price: 55,
        },
        {
          id: 3,
          name: "Lassi",
          img: "https://pipingpotcurry.com/wp-content/uploads/2021/05/Lassi-in-a-glass.jpg",
          category: "beverages",
          price: 90,
        },
        {
          id: 12,
          name: "Milk",
          img: "https://m.media-amazon.com/images/I/61lzZAgOCzL.jpg",
          category: "beverages",
          price: 40,
        },
      
        {
          id: 5,
          name: "Tandoori Platter",
          img: "https://images.slurrp.com/prod/recipe_images/better-butter/tandoori-paneer-platter_HX3XOHVHLY0WD9AXFZZG.webp?impolicy=slurrp-20210601&width=1200&height=675",
          category: "food",
          price: 295,
        },
        {
          id: 6,
          name: "Naan",
          img: "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
          category: "food",
          price: 20,
        },
        {
          id: 13,
          name: "Paneer Butter Masala",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5kecc5mebmjSS-CrZAKaa_RUwoFa5NOuwg&usqp=CAU",
          category: "food",
          price: 240,
        },
        {
          id: 14,
          name: "Gol Gappe",
          img: "https://static.toiimg.com/photo/75107900.cms",
          category: "food",
          price: 60,
        },
      ];



    return(
        <>
         <div className="flex  justify-between   mx-8 my-8">
            <h2 className="text-2xl font-semibold">Our Food Blogs</h2>
            <h1 className="hidden sm:flex  items-center gap-4"><span>Explore All</span> <span><img src="/Line.svg" alt="arrow" /></span></h1>
        </div>
        <section className="flex flex-col gap-4 justify-center items-center p-4">
         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 justify-between   items-center max-w-[1000px]">
         {
            blogs.map((item,index)=>
            (
                <BlogCard {...item}  index={index} key={item.id}/>
            ))
         }
         </div>

        </section>
        </>
    )

}


export default Blogs;