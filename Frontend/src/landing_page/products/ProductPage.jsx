import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ProductPage = () => {
  return (
    <div className='min-h-screen bg-white selection:bg-blue-50'>
      <Navbar />
      <main className='pt-28 md:pt-40 px-6 md:px-12 max-w-7xl mx-auto overflow-x-hidden'>
        
        <Hero />
        <div className='flex flex-col gap-10 md:gap-20'>
          <LeftSection 
            imageURL="images/products-kite.png"  
            productName="Kite"  
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
            tryDemoURL="#" 
            learnMoreURL="#"
          />
          
          <RightSection 
            imageURL="images/products-console.png" 
            productName="Console" 
            productDescription="The central dashboard for your Herodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
            learnMoreURL="#"
          />
          
          <LeftSection 
            imageURL="images/products-coin.png"  
            productName="Coin"  
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
            tryDemoURL="#" 
            learnMoreURL="#"
          />
          
          <RightSection 
            imageURL="images/landing.svg" 
            productName="Kite Connect API" 
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase" 
            learnMoreURL="#"
          />
          
          <LeftSection 
            imageURL="images/varsity-products.svg"  
            productName="Varsity Mobile"  
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
            tryDemoURL="#" 
            learnMoreURL="#"
          />
        </div>
        <div className='mt-20 md:mt-40 border-t border-gray-50 pt-20'>
          <Universe />
        </div>
        
      </main>

      <Footer />
    </div>
  )
}

export default ProductPage