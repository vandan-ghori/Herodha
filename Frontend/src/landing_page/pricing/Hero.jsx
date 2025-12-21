import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex mb-30 flex-col items-center gap-5'>
          <h1 className='text-4xl'>Charges</h1>
          <p className='text-xl'>List of all charges and taxes</p>
        </div>
        <div className='flex gap-10 justify-between'>
          <div className='flex w-[80vw] gap-5 flex-col items-center'>
            <img src="images/pricing-eq.svg" alt="" />
            <h1 className='text-2xl'>Free equity delivery</h1>
            <p className='text-[1vw]'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>  
          </div>
          <div className='flex w-[80vw] gap-5 flex-col items-center'>
            <img src="images/other-trades.svg" alt="" />
            <h1 className='text-2xl'>Intraday and F&O trades</h1>
            <p className='text-[1vw]'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='flex w-[80vw] gap-5 flex-col items-center'>
            <img src="images/pricing-eq.svg" alt="" />
            <h1 className='text-2xl'>Free direct MF</h1>
            <p className='text-[1vw]'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
    </div>
  )
}

export default Hero