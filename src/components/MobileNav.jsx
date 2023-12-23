

const MobileNav=()=>{



    return(
        <>

        <section className="sm:hidden flex justify-between  items-baseline px-4 py-2 sticky bottom-0 bg-[var(--neutralblack)] border-t border-[var(--primarytext)] ">
            <div className="flex flex-col gap-1 justify-center items-center">
                <div className="w-[16px]">
                    <img src="/property.svg" alt="home" />
                </div>
                <h2 className="text-xs font-thin">Home</h2>
            </div>

            <div  className="flex flex-col gap-1 justify-center items-center  ">
                <div className="w-[16px]">
                    <img src="/location.svg" alt="location"  />
                </div>
                <h2 className="text-xs font-thin">Property</h2>
            </div>

            <div  className="flex flex-col gap-1 justify-center items-center">
                <div className="w-[16px]">
                    <img src="/budget.svg" alt="budget" />
                </div>
                <h2 className="text-xs font-thin">Agents</h2>
            </div>

            <div  className="flex flex-col  gap-1 justify-center items-center">
                <div className="w-[16px]">
                    <img src="/about.svg" alt="about" />
                </div>
                <h2 className="text-xs font-thin">About</h2>
            </div>
        </section>

        </>
    )

}


export default MobileNav;