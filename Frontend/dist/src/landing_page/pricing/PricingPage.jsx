import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='p-40 mr-20 ml-20'>
      <Hero />
      <Brokerage />
    </div>
    <Footer />
    </div>
  )
}

export default PricingPage