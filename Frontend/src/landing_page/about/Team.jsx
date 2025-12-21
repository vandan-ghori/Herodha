import React from 'react'

const Team = () => {
  return (
    <div className='flex mr-50 h-[35vw] ml-90 gap-10'>
        <div className='flex flex-col items-center gap-2'>
            <img className='w-[60vw] border-4 border-[#387ED1] rounded-[50%]' src="images/nithin-kamath.jpg" alt="" />
            <h1 className='font-bold text-2xl mt-5'>Vandan Ghori</h1>
            <p>Founder, CEO</p>
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl'>People</h1>
            <p>Vandan bootstrapped and founded Herodha in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, Herodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <div className='flex gap-1.5'>
                <p>Connect on</p>
                <p className='text-[#387ED1] hover:text-black cursor-pointer'>Homepage /</p>
                <p className='text-[#387ED1] hover:text-black cursor-pointer'>TradingQnA /</p>
                <p className='text-[#387ED1] hover:text-black cursor-pointer'>Twitter</p>
            </div>
        </div>
    </div>
  )
}

export default Team