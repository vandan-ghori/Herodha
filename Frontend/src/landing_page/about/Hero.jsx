import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-items-center p-40 mr-40 ml-40 flex-col gap-25'>
        <div className='flex ml-45 text-2xl'>
            <h1>We pioneered the discount broking model in India. <br /> Now, we are breaking ground with our technology.</h1>
        </div>
        <hr />
        <div className='flex text-xl text-gray-500 gap-5'>
            <div className='flex flex-col gap-10'>
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Herodha, a combination of Hero and "Rodha", the Sanskrit word for barrier.</p>
                <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className='flex w-[300%]  flex-col gap-10'>
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero