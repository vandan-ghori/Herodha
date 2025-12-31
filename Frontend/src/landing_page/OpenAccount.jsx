import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpenAccount = () => {
  const navgation = useNavigate()
  
  return (
    <div className='my-20 md:my-32 px-6 md:px-20 lg:mx-40 flex flex-col items-center text-center gap-4'>
      
      <h1 className='text-3xl md:text-4xl font-semibold text-gray-800'>
        Open a Herodha account
      </h1>
      
      <p className='text-lg md:text-xl text-gray-600 max-w-2xl'>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
    
      <button 
        onClick={() => {; window.scrollTo({top: 0, behavior: 'smooth'})}} 
        className='cursor-pointer hover:scale-95 mt-8 md:mt-10 py-3 px-10 w-full sm:w-auto md:min-w-[200px] text-xl font-medium transition-all duration-300 hover:bg-black border-none rounded-md bg-[#387ed1] text-white shadow-lg active:scale-95'
      >
        Sign up for free
      </button>
      
    </div>
  )
}

export default OpenAccount