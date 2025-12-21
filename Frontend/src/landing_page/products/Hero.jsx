import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center  gap-5'>
        <h1 className='text-3xl'>Herodha Products</h1>
        <h2 className='text-xl'>Sleek, modern, and intuitive trading platforms</h2>
        <div className='flex gap-1'>
            <p>Check out our</p>
            <p className='text-[#387ED1] cursor-pointer hover:text-black'>investment offerings →</p>
        </div>
    </div>
  )
}

export default Hero