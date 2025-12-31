import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PricingPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main className='pt-20 md:pt-32 px-6 md:px-12 max-w-7xl mx-auto overflow-x-hidden'>
        <div className='animate-in fade-in duration-1000 slide-in-from-bottom-4'>
          <Hero />
          <div className='my-10 md:my-20'>
            <Brokerage />
          </div>
        </div>
        <div className='mt-16 mb-24 text-center'>
            <p className='text-gray-400 text-sm'>
                Have questions about our charges? 
                <span className='text-[#387ed1] cursor-pointer hover:underline ml-1'>
                    Visit our support portal
                </span>
            </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PricingPage