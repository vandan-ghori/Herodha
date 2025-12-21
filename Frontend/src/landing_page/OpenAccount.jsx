import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpenAccount = () => {
  const navgation = useNavigate()
  return (
    <div className='mr-40 ml-40 mb-20 gap-2 flex flex-col items-center'>
      <h1 className='text-3xl'>Open a Herodha account</h1>
      <p className='text-xl'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <button onClick={() => navgation("/signup")} className='cursor-pointer mt-10 p-2 w-[15%] text-xl hover:bg-black border rounded-md bg-[#387ed1] text-white ' >Sign up for free</button>
    </div>
  )
}

export default OpenAccount