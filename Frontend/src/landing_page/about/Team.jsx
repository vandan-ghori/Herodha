import React from 'react'

const Team = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center my-20 px-6 md:px-20 lg:px-40 gap-12 lg:gap-24'>
        
        <div className='flex flex-col items-center gap-2 flex-shrink-0'>
            <img 
              className='w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-[#387ED1] rounded-full shadow-lg transition-transform duration-500 hover:scale-105' 
              src="https://avatars.githubusercontent.com/u/191661898?v=4?s=400" 
              alt="Vandan Ghori" 
            />
            <h1 className='font-bold text-2xl mt-5 text-gray-800'>Vandan Ghori</h1>
            <p className='text-gray-500 font-medium'>Founder, CEO</p>
        </div>
        <div className='flex flex-col gap-5 text-center lg:text-left max-w-2xl'>
            <h1 className='text-3xl md:text-4xl font-semibold text-gray-800'>People</h1>
            
            <div className='flex flex-col gap-4 text-base md:text-lg text-gray-600 leading-relaxed'>
              <p>
                Vandan bootstrapped and founded Herodha in 2025 to overcome the hurdles he faced 
                during his decade long stint as a trader. Today, Herodha has changed the landscape 
                of the Indian broking industry.
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the 
                Market Data Advisory Committee (MDAC).
              </p>
            </div>

            <div className='flex flex-wrap justify-center lg:justify-start gap-2 mt-2 font-medium'>
                <p className='text-gray-500'>Connect on</p>
                <p className='text-[#387ED1] hover:text-black cursor-pointer transition-colors'>Homepage /</p>
                <p className='text-[#387ED1] hover:text-black cursor-pointer transition-colors'>TradingQnA /</p>
                <p className='text-[#387ED1] hover:text-black cursor-pointer transition-colors'>Twitter</p>
            </div>
        </div>
    </div>
  )
}

export default Team