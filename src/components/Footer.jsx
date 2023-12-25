import "../App.css";

const Footer =()=>{



    const goToTop=()=>{

        window.scroll({
            top:0,
            behavior:"smooth"
        })

    }

    return(
        <>
        <footer className="bg-[var(--neutralblack)] text-white my-4 py-4 px-4 grid  gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 overflow-hidden">
            <div>
                <h2>Our useful links</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 " >
                    <li>Quick Links</li>
                    <li>Helpful Resources</li>
                    <li>Explore More</li>
                    <li>Essential Links</li>
                    <li>Go-To Guides</li>
                    <li>Beyond the Menu</li>
                </ul>
            </div>
            <div>
                <h2>Socials</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>Social Bites</li>
                    <li>Foodie Friends</li>
                    <li>Delicious Connections</li>
                    <li>Facebook Flavor</li>
                </ul>
            </div>

            <div>
                <h2>Collabrators</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>Collaboration Corner</li>
                    <li>CollaboraLink</li>
                    <li>Partners in Flavor</li>
                    <li>CUnity in Cuisine</li>
                    <li>Harmony in Hospitality</li>
                    <li>Blend & Bond Network</li>
                    <li>Savor Collaborators</li>
                </ul>
            </div>

            <div>
                <h2>Foods category</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>Savory Staples</li>
                    <li>Healthy Noshes</li>
                    <li>Comfort Classics</li>
                    <li>Fresh & Fit</li>
                    <li>Mouthwatering Meats</li>
                </ul>
            </div>

            <div>
                <h2>ContactUs</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>Reach Out & Taste</li>
                    <li>Flavorful Feedback</li>
                    <li>Get in Touch with Tastes</li>
                    <li>Flavor Inquiries</li>
                </ul>
            </div>
        </footer>
        <div className="flex justify-center items-center w-full cursor-pointer"  onClick={()=> goToTop()}>
       <span className="text-2xl cursor-pointer mb-4"><img src="/downArrow.svg" alt="downArrow"/> </span>
        </div>
        </>
    )

}

export default Footer;
