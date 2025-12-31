import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navgation = useNavigate()
  
  return (
    <div className='relative pt-24 pb-12 md:pt-32 md:pb-0 px-6 items-center flex flex-col text-center'>
        <img 
          className='w-[90%] md:w-[62%] max-w-4xl h-auto' 
          src="images/homepage.svg" 
          alt="Investment Illustration" 
        />
        <h1 className='mt-8 md:mt-12 text-3xl md:text-5xl font-semibold text-gray-800 tracking-tight'>
          Invest in everything
        </h1>

        <p className='text-lg md:text-xl mt-4 text-gray-600 max-w-2xl'>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>

        <button 
          onClick={() => {navgation("/signup"); window.scrollTo({top: 0, behavior: 'smooth'})}} 
          className='cursor-pointer mt-8 md:mt-10 py-3 px-8 w-full sm:w-auto md:min-w-[200px] text-lg font-medium transition-all hover:bg-black hover:scale-95 border-none rounded-md bg-[#387ed1] text-white shadow-lg active:scale-95'
        >
          Sign up for free
        </button>
    </div>
  )
}

export default Hero