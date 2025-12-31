import React from 'react'
import { useNavigate } from 'react-router-dom'

const Stats = () => {
  const navigation = useNavigate();
  return (
    <div className='my-16 md:my-28 px-6 md:px-20 lg:px-40 flex flex-col items-center'>
      
      <div className='flex flex-col lg:flex-row gap-10 lg:gap-4 mb-16 items-center lg:items-start'>
        
        <div className='w-full lg:w-[60%] text-center lg:text-left'>
          <h2 className='mb-8 md:mb-10 text-gray-800 text-3xl md:text-4xl font-semibold'>Trust with confidence</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className='mb-2 text-gray-800 text-xl md:text-2xl font-medium'>Customer-first always</h3>
              <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                That's why 1.6+ crore customers trust Herodha with ~ ₹6 lakh crores of equity investments, 
                making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>

            <div>
              <h3 className='mb-2 text-gray-800 text-xl md:text-2xl font-medium'>No spam or gimmicks</h3>
              <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps 
                that you use at your pace, the way you like. Our philosophies.
              </p>
            </div>

            <div>
              <h3 className='mb-2 text-gray-800 text-xl md:text-2xl font-medium'>The Herodha universe</h3>
              <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups 
                offer you tailored services specific to your needs.
              </p>
            </div>

            <div>
              <h3 className='mb-2 text-gray-800 text-xl md:text-2xl font-medium'>Do better with money</h3>
              <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                but actively help you do better with your money.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[40%] flex flex-col items-center'>
          <div className='mb-8 w-full max-w-md lg:max-w-full'>
            <img className="w-full h-auto" src="images/ecosystem.png" alt="Ecosystem" />
          </div>
          <div className='text-[#2e8cff] flex flex-col sm:flex-row items-center gap-6 lg:gap-10 font-medium text-lg'>
            <button 
                onClick={() => navigation("/product")} 
                className='hover:text-black cursor-pointer transition-colors'
            >
                Explore our products &rarr;
            </button>
            <button className='hover:text-black cursor-pointer transition-colors'>
                Try Kite demo &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <img className='w-full max-w-4xl opacity-80' src="images/press-logos.png" alt="Press Logos" />
      </div>
    </div>
  )
}

export default Stats