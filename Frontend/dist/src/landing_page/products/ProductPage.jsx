import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className='p-40 mr-40 ml-40 '>
      
        <Hero />
        <LeftSection imageURL="images/products-kite.png"  productName="Kite"  productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." />
        <RightSection imageURL="images/products-console.png" productName="Console" productDesription="The central dashboard for your Herodha account. Gain insights into your trades and investments with in-depth reports and visualisations." />
        <LeftSection imageURL="images/products-coin.png"  productName="Coin"  productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." />
        <RightSection imageURL="images/landing.svg" productName="Kite Connect API" productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase" />
        <LeftSection imageURL="images/varsity-products.svg"  productName="Varsity Mobile"  productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." />
        <Universe />
        
    </div>
    <Footer />
    </div>
  )
}

export default ProductPage