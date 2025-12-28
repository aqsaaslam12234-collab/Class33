
const Pricing = () => {
   

  const plans = [
    {
      title: 'START',
      price: 'Free',
      features: [
        'Vexillologist pitchfork',
        'Tumeric plaid portland',
        'Mixtape chillwave tumeric'
      ],
      buttonClass: 'bg-gray-400 hover:bg-gray-500',
      borderClass: 'border-gray-200',
      popular: false
    }
  ];

 
  return (
    <div className=" mt-130">
      <h1 className="font-bold text-4xl content-center text-teal-950 ">Pricing</h1>
      <p className="py-2 text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      <div className="content-center mt-4 ">
        <button className="bg-teal-500 text-white w-30 h-11 rounded-l-lg">Monthly</button>
        <button className="focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-teal-700 w-30 h-10 rounded-r-lg">Annualy</button>
      </div>
      <div className="space-x-4 mt-5 flex flex-col-1/4">
        <div className="border-2 border-teal-500 w-80 h-100 rounded">
            <h2 className="text-gray-500 text-left px-5 mt-5">START</h2>
            <h1 className="font-bold text-2xl text-left px-5">FREE</h1>
            
            <hr className="size-60 ml-5 mt-4 border-gray-400" />
            <div className="">

            <ul className="list-disc ">
                <li>Vexillologidt Pitchfork</li>
                <li>Tumeric plaid portlan</li>
                <li>Mixtape chillwave tumeric</li>
                
            </ul>
            </div>

            

        </div>

        <div className="border-2 border-teal-500 w-80 h-120 rounded">
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg border-2 ${plan.borderClass} p-8 relative`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </span>
              </div>
            )}
            <div className="mb-6">
              <p className="text-gray-600 text-sm font-medium tracking-wide mb-2">
                {plan.title}
              </p>
              <h2 className="text-5xl font-bold text-gray-900">
                {plan.price}
                {plan.priceSubtext && (
                  <span className="text-xl text-gray-600 font-normal">
                    {plan.priceSubtext}
                  </span>
                )}
              </h2>
            </div>
             <div className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full ${plan.buttonClass} text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 transition-colors group`}
            >
              Button
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-gray-500 text-xs mt-4 text-center">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        ))}
      </div>





        </div>
          


      
        <div className="border-2 border-teal-500 w-80 h-120 rounded"></div>
        <div className="border-2 border-teal-500 w-80 h-120 rounded"></div>

      </div>
    </div>
  )
}

export default Pricing()
