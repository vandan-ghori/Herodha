import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-10  py-35 px-6 md:px-40 bg-gray-200'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <h1 className='text-3xl md:text-4xl font-semibold'>Support Portal</h1>
        <button className='bg-[#387ED1] text-white w-full md:w-40 text-lg md:text-xl p-2 cursor-pointer rounded-lg hover:bg-blue-700 transition-colors'>
          My Ticket
        </button>
      </div>
      <form className='flex items-center gap-3 shadow-2xl p-4 bg-white rounded-sm' action="">
        <img src="images/search-line.png" alt="search" className="w-6 h-6" />
        <input 
          className='w-full h-10 focus:outline-0 text-base md:text-lg' 
          type="text" 
          placeholder='Eg: How do I open account, activate F&O...'
        />
      </form>
    </div>
  )
}

export default Hero