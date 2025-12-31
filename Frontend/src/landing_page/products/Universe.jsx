import React from 'react'
import { useNavigate } from 'react-router-dom'

const Universe = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-20 px-6 md:px-20 lg:px-40 gap-12'>
      <div className='flex flex-col items-center text-center gap-4 max-w-3xl'>
        <h1 className='text-3xl md:text-4xl font-semibold text-gray-800'>The Herodha Universe</h1>
        <p className='text-lg md:text-xl text-gray-500'>
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-10 w-full'>
        
        <div className='flex flex-col items-center text-center gap-4 group'>
          <div className='h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300'>
            <img className='max-w-[150px] md:max-w-[180px]' src="images/zerodhafundhouse.png" alt="Herodha Fund House" />
          </div>
          <p className='text-sm text-gray-500 leading-relaxed max-w-[250px]'>
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className='flex flex-col items-center text-center gap-4 group'>
          <div className='h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300'>
            <img className='max-w-[150px] md:max-w-[200px]' src="images/sensibull-logo.svg" alt="Sensibull" />
          </div>
          <p className='text-sm text-gray-500 leading-relaxed max-w-[250px]'>
            Options trading platform that lets you create strategies, analyze positions, and examine data points.
          </p>
        </div>

        <div className='flex flex-col items-center text-center gap-4 group'>
          <div className='h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300'>
            <img className='max-w-[120px] md:max-w-[150px]' src="images/tijori.svg" alt="Tijori" />
          </div>
          <p className='text-sm text-gray-500 leading-relaxed max-w-[250px]'>
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className='flex flex-col items-center text-center gap-4 group'>
          <div className='h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300'>
            <img className='max-w-[140px] md:max-w-[160px]' src="images/streak-logo.png" alt="Streak" />
          </div>
          <p className='text-sm text-gray-500 leading-relaxed max-w-[250px]'>
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        <div className='flex flex-col items-center text-center gap-4 group'>
          <div className='h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300'>
            <img className='max-w-[140px] md:max-w-[160px]' src="images/smallcase-logo.png" alt="Smallcase" />
          </div>
          <p className='text-sm text-gray-500 leading-relaxed max-w-[250px]'>
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        <div className='flex flex-col items-center text-center gap-4 group'>
          <div className='h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300'>
            <img className='max-w-[120px] md:max-w-[140px]' src="images/ditto-logo.png" alt="Ditto" />
          </div>
          <p className='text-sm text-gray-500 leading-relaxed max-w-[250px]'>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>

      </div>

      <button 
        onClick={() => navigate("/signup")} 
        className='cursor-pointer mt-12 py-3 px-12 w-full sm:w-auto text-xl font-medium hover:bg-black transition-all duration-300 border-none rounded-md bg-[#387ed1] text-white shadow-lg active:scale-95'
      >
        Sign up for free
      </button>

    </div>
  )
}

export default Universe