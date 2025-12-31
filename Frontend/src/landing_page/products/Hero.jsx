import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center text-center gap-4 py-16 md:py-24 px-6 animate-in fade-in slide-in-from-top-4 duration-1000'>
        
        <h1 className='text-3xl md:text-5xl font-semibold text-gray-800 tracking-tight'>
          Herodha Products
        </h1>
        <h2 className='text-lg md:text-xl text-gray-500 font-normal'>
          Sleek, modern, and intuitive trading platforms
        </h2>
        <div className='flex items-center gap-1.5 mt-2 text-base md:text-lg'>
            <p className='text-gray-600'>Check out our</p>
            <p className='text-[#387ED1] cursor-pointer hover:text-black transition-colors font-medium'>
              investment offerings &rarr;
            </p>
        </div>
        <div className='w-16 h-1 bg-gray-100 mt-8 rounded-full'></div>
    </div>
  )
}

export default Hero