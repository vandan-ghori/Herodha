import React from 'react'
import { useNavigate } from 'react-router-dom'

const Stats = () => {
  const navigation = useNavigate();
  return (
    <div className='m-40 mt-30 mb-25 flex flex-col items-center'>
      <div className='flex gap-2 mb-20'>
        <div className='w-[65%]'>
          <h2 className='mb-10 text-gray-800 text-3xl'>Trust with confidence</h2>
          <h3 className='mb-3 text-gray-800 text-2xl'>Customer-first always</h3>
          <p className='mb-8 text-gray-600 text-[1.2vw]'>That's why 1.6+ crore customers trust Herodha with ~ ₹6<br/> lakh crores of equity investments, making us India’s <br/> largest broker; contributing to 15% of daily retail<br/> exchange volumes in India.</p>
          <h3 className='mb-3  text-gray8700 text-2xl'>No spam or gimmicks</h3>
          <p className='mb-8 text-gray-600 text-[1.2vw]'>No gimmicks, spam, "gamification", or annoying push<br/> notifications. High quality apps that you use at your <br/> pace, the way you like. Our philosophies.</p>
          <h3 className='mb-3 text-gray-800 text-2xl'>The Herodha universe</h3>
          <p className='mb-8 text-gray-600 text-[1.2vw]'>Not just an app, but a whole ecosystem. Our investments <br/> in 30+ fintech startups offer you tailored services <br/> specific to your needs.</p>
          <h3 className='mb-3 text-gray-800 text-2xl'>Do better with money</h3>
          <p className='mb-8 text-gray-600 text-[1.2vw]'>With initiatives like Nudge and Kill Switch, we don't just <br/> facilitate transactions, but actively help you do better <br/> with your money.</p>
        </div>
        <div>
          <div className='mb-5'>
            <img src="images/ecosystem.png" alt="" />
          </div>
          <div className='text-[#2e8cff] flex ml-35 gap-30'>
            <button onClick={() => navigation("/product")} className='hover:text-black cursor-pointer'>Explore out products</button>
            <button className='hover:text-black cursor-pointer'>Try Kite demo</button>
          </div>
        </div>
      </div>
      <img className='w-4xl' src="images/press-logos.png" alt="" />
    </div>
  )
}

export default Stats