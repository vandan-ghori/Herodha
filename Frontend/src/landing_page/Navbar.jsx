import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const [list, setList] = useState(false);

  const navgation = useNavigate()
  return (
    <div className='fixed z-50 bg-white flex p-5 border-b-2 border-gray-300'>
      <img onClick={() => navgation("/")} className='w-[10%] cursor-pointer ml-[12.5%]' src="images/Herodha.png" alt="" />
      <div className='flex w-full bg ml-[32.5%] text-[#6a6a6a] gap-10'>
        <h3 onClick={() => navgation("/about")}  className='hover:text-[#387ED1] cursor-pointer'>About</h3>
        <h3 onClick={() => navgation("/product")}  className='hover:text-[#387ED1] cursor-pointer'>Products</h3>
        <h3 onClick={() => navgation("/pricing")}  className='hover:text-[#387ED1] cursor-pointer'>Pricing</h3>
        <h3 onClick={() => navgation("/support")}  className='hover:text-[#387ED1] cursor-pointer'>Support</h3>
        <div onClick={() => setList(!list)}>
          <img className='h-5.5 mt-0.5 cursor-pointer' src="images/menu-line.png" alt="" />
          {list && (
            <div className="absolute top-full bg-white text-black shadow-lg rounded-lg p-4 z-50">
              <p onClick={() => navgation("/signup")} className="hover:bg-gray-100 p-2 cursor-pointer">SignUp</p>
              <p onClick={() => navgation("/login")} className="hover:bg-gray-100 p-2 cursor-pointer">Login</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar