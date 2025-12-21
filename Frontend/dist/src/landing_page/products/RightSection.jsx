import React from 'react'

const RightSection = ({
    imageURL,
    productName,
    productDesription
}) => {
  return (
    <div className='flex flex-col items-center mt-30 -ml- mb-30'>
        <div className='flex gap-10'>
            <div className='flex flex-col gap-10 ml-10 mt-20'>
                <h1 className='text-4xl'>{productName}</h1>
                <p>{productDesription}</p>
                <div className='flex gap-5 text-[#387ED1]'>
                    <h1 className='hover:text-black cursor-pointer'>Learn More</h1>
                </div>
            </div>
            <div className='-mt-10'>
                <img className='w-[180vw]' src={imageURL} alt="" />
            </div>
        </div>
    </div>
  )
}

export default RightSection