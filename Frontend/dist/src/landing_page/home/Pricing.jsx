import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
  const navgation = useNavigate()
  return (
    <div className='relative gap-5 p-4 flex mb-30 mr-40 ml-40'>
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-3xl'>Unbeatable pricing</h1>
        <p className='text-gray-800 text-[1.15vw]'>We pioneered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges.</p>
        <button onClick={() => navgation("/pricing")} className='text-[#2e8cff] text-xl cursor-pointer'>See pricing</button>
      </div>
      <div className='flex gap-15'>
        <div className='flex w-40 items-center'>
          <img className='relative ' src="images/pricing-eq.svg" alt="" />
          <h4 className=' absolute top-[5.8vw] left-[39vw] text-[.8vw]'>Free account <br />opening</h4>
        </div>
        <div className='flex w-40 -ml-4 items-center'>
          <img className='relative ' src="images/pricing-eq.svg" alt="" />
          <h4 className=' absolute top-[5.8vw] left-[52.5vw] text-[.8vw]'>Free equity delivery <br />and direct mutual funds</h4>
        </div>
        <div className='flex w-40 ml-7 items-center'>
          <img className='relative ' src="images/other-trades.svg" alt="" />
          <h4 className=' absolute top-[5.8vw] left-[70vw] text-[.8vw]'>Intraday and <br />F&O</h4>
        </div>
      </div>
    </div>
  )
}

export default Pricing