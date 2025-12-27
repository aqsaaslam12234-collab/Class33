

const Header = () => {
  return (
    <>
    <nav className="relative bg-gray-100">
        <div className="flex max-w-full h-20 shadow bg-white">
          <img className="size-20 rounded-full mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBuB632p-BzikvlVaPUTEubUuieUuoFM2TQ&s" alt="" />
           <h1 className="font-bold text-3xl mt-5 text-teal-600">LOGO </h1>
          <div className="flex space-x-3">
             <div className=" content-center items-stretch ml-70">
            <a href="#" aria-current="page" className="py-2 rounded-md font-medium px-3 text-sm text-teal-600  ">Home</a>
            <a href="#" className="py-2 rounded-md font-medium px-3  text-teal-600 hover:bg-gray-400/8  ">Abour Us</a>
            <a href="#" className="py-2 rounded-md font-medium px-3  text-teal-600 hover:bg-gray-400/8  ">Services</a>
            <a href="#" className="py-2 rounded-md font-medium px-3  text-teal-600 hover:bg-gray-400/8  ">Contact Us</a>
           </div>
           <div className="content-center  absolute inset-y-0 right-10">
           <button className="bg-gradient-to-r from-teal-700 to-teal-400 w-40 h-10 rounded-2xl text-white hover:bg-gradient-to-r hover:from-teal-300 hover:to-teal-900 font-bold ">Click Here 👆🏽 </button>

           </div>
          </div>
        </div>
        
    </nav>

      
    </>
  )
}

export default Header



