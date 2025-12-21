import React from 'react'

const Education = () => {
  return (
    <div className='flex items-center mb-30 mr-40 ml-40 justify-between'>
      <div>
        <img src="images/index-education.svg" alt="" />
      </div>
      <div className='mr-20'>
        <h1 className='text-3xl'>Free and open markest education</h1><br />
        <p className='text-[1.1vw]'>Varsity, the largest online stock market education book in the world <br /> covering everything from the basics to advanced trading.</p><br />
        <button className='text-[#2e8cff] cursor-pointer'>Varsity</button><br /><br />
        <p className='text-[1.1vw]'>TradingQ&A, the most active trading and investment community in <br /> India for all your market related queries.</p><br />
        <button className='text-[#2e8cff] cursor-pointer'>TradingQ&A</button>
      </div>
    </div>
  )
}

export default Education