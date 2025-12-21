import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navgation = useNavigate()
  return (
    <div className='relative p-35 pb-0 items-center flex flex-col'>
        <img className='w-[62%]' src="images/homepage.svg" alt="" />
        <h1 className='mt-10 text-3xl '>Invest in everything</h1>
        <p className='text-2xl mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button onClick={() => navgation("/signup")} className='cursor-pointer mt-10 p-2 w-[15%] text-xl hover:bg-black border rounded-md bg-[#387ed1] text-white ' >Sign up for free</button>
    </div>
  )
}

export default Hero