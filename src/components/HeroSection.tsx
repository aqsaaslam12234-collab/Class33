
const HeroSection = () => {
  return (
    <div className="absolute flex flex-col-1/2 x-space-5">
        <div className=" justify-between">
            <img className="mt-20" src="https://placehold.co/600x400" alt="" />
            

        </div>
        <div className="mt-20 justify-between px-20 py-10 ">
            <h1 className="text-4xl font-bold text-left text-teal-950">Before they sold out <br /> readymade gluten</h1>
            <br />
            <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.veniam sed aspernatur atque? <br />
                 Illo, quidem.Nesciunt aut facere qui architecto ratione odit?</p>
                 <br />
                <div className="flex space-x-4">
                     <button className="bg-teal-500 w-30 h-10 rounded font-bold text-white hover:bg-teal-700">Learn More</button>
                     <button className="bg-gray-400 w-30 h-10 rounded font-bold text-white hover:bg-gray-500">Details</button>
                </div>
        </div>

     
    </div>
  )
}

export default HeroSection
