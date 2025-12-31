import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center py-16 md:py-24 px-6 md:px-20 lg:px-60 gap-10 md:gap-16'>
        
        <div className='w-full text-center'>
            <h1 className='text-xl md:text-3xl font-medium text-gray-800 leading-snug max-w-4xl mx-auto'>
              We pioneered the discount broking model in India. <br className='hidden md:block' /> 
              Now, we are breaking ground with our technology.
            </h1>
        </div>

        <hr className='w-full border-gray-200' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-base md:text-[1.1rem] text-gray-600 leading-relaxed'>
            
            <div className='flex flex-col gap-6'>
                <p>
                  We kick-started operations on the 15th of August, 2010 with the goal of breaking all 
                  barriers that traders and investors face in India in terms of cost, support, and technology. 
                  We named the company Herodha, a combination of Hero and "Rodha", the Sanskrit word for barrier.
                </p>
                <p>
                  Today, our disruptive pricing models and in-house technology have made us the biggest 
                  stock broker in India.
                </p>
                <p>
                  Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem 
                  of investment platforms, contributing over 15% of all Indian retail trading volumes.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p>
                  In addition, we run a number of popular open online educational and community initiatives 
                  to empower retail traders and investors.
                </p>
                <p>
                  Rainmatter, our fintech fund and incubator, has invested in several fintech startups 
                  with the goal of growing the Indian capital markets.
                </p>
                <p>
                  And yet, we are always up to something new every day. Catch up on the latest updates 
                  on our blog or see what the media is saying about us or learn more about our 
                  business and product philosophies.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero