import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center my-20 lg:my-32 px-6 md:px-20 lg:px-40 justify-between gap-10'>
      <div className='w-full lg:w-1/2 flex justify-center'>
        <img 
          src="images/index-education.svg" 
          alt="Education Illustration" 
          className='w-full max-w-[450px] h-auto'
        />
      </div>
      <div className='w-full lg:w-1/2 lg:pl-10 text-center lg:text-left'>
        <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 leading-tight'>
          Free and open market education
        </h1>
        <br />
        <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
          Varsity, the largest online stock market education book in the world 
          covering everything from the basics to advanced trading.
        </p>
        <button className='text-[#2e8cff] font-medium hover:underline cursor-pointer mt-2'>
          Varsity &rarr;
        </button>
        
        <br /><br />
        
        <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
          TradingQ&A, the most active trading and investment community in 
          India for all your market related queries.
        </p>
        <button className='text-[#2e8cff] font-medium hover:underline cursor-pointer mt-2'>
          TradingQ&A &rarr;
        </button>
      </div>
    </div>
  )
}

export default Education