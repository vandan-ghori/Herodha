import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-10 p-35 pb-20 bg-gray-200'>
      <div className='flex justify-between '>
        <h1 className='text-4xl'>Support Portal</h1>
        <button className='bg-[#387ED1] text-white w-30 text-xl p-1 cursor-pointer rounded-lg'>My Ticket</button>
      </div>
      <form className='flex gap-3 shadow-2xl p-4 bg-white ' action="">
        <img src="images/search-line.png" alt="" />
        <input className='w-full h-full focus:outline-0' type="text" placeholder='Eg:How do I open account, How do I activate F&O.....'/>
      </form>
    </div>
  )
}

export default Hero