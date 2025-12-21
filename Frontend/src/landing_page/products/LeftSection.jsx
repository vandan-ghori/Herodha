import React from 'react'

const LeftSection = ({
    imageURL,
    productName,
    productDesription,
}) => {
  return (
    <div className='flex flex-col items-center mt-30 -ml-20 mb-30'>
        <div className='flex gap-20'>
            <div>
                <img className='w-[180vw]' src={imageURL} alt="" />
            </div>
            <div className='flex flex-col gap-10 ml-10 mt-15'>
                <h1 className='text-4xl'>{productName}</h1>
                <p>{productDesription}</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-5 text-[#387ED1]'>
                        <h1 className='hover:text-black cursor-pointer'>Try Demo</h1>
                        <h1 className='hover:text-black cursor-pointer'>Learn More</h1>
                    </div>
                    <div className='flex gap-5'>
                        <img className='cursor-pointer' src="images/google-play-badge.svg" alt="" />
                        <img className='cursor-pointer' src="images/appstore-badge.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSection