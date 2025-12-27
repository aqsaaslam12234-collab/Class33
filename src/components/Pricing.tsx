
const Pricing = () => {
  return (
    <div className=" mt-130">
      <h1 className="font-bold text-4xl content-center text-teal-950 ">Pricing</h1>
      <p className="py-2 text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      <div className="content-center mt-4 ">
        <button className="bg-teal-500 text-white w-30 h-11 rounded-l-lg">Monthly</button>
        <button className="focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-teal-700 w-30 h-10 rounded-r-lg">Annualy</button>
      </div>
      <div className="space-x-4 mt-5 flex flex-col-1/4">
        <div className="border-2 border-teal-500 w-80 h-120 rounded">
            <h2 className="text-gray-500 text-left px-5 mt-5">START</h2>
            <h1 className="font-bold text-2xl text-left px-5">FREE</h1>
            
            <hr className="size-60 ml-5 mt-4 border-gray-400" />
            <ul className="list-image-[url()]">
                <li>Vexillologidt Pitchfork</li>
                <li>Tumeric plaid portlan</li>
                <li>Mixtape chillwave tumeric</li>
                
            </ul>

            

        </div>

        <div className="border-2 border-teal-500 w-80 h-120 rounded"></div>
        <div className="border-2 border-teal-500 w-80 h-120 rounded"></div>
        <div className="border-2 border-teal-500 w-80 h-120 rounded"></div>

      </div>
    </div>
  )
}

export default Pricing
