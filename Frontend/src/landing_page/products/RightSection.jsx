import React from 'react'

const RightSection = ({
    imageURL,
    productName,
    productDescription,
    learnMoreURL
}) => {
  return (
    <div className='flex flex-col lg:flex-row-reverse items-center justify-between my-20 md:my-32 px-6 md:px-20 lg:px-40 gap-10 lg:gap-20'>
        
        <div className='w-full lg:w-[55%] animate-in fade-in slide-in-from-right-8 duration-1000'>
            <img 
                className='w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500' 
                src={imageURL} 
                alt={productName} 
            />
        </div>
        <div className='w-full lg:w-[40%] flex flex-col gap-6 md:gap-8 animate-in fade-in slide-in-from-left-8 duration-1000'>
            <h1 className='text-3xl md:text-4xl font-semibold text-gray-800'>{productName}</h1>
            <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                {productDescription}
            </p>
            
            <div className='flex gap-8 text-[#387ED1] font-medium text-lg'>
                <a 
                  href={learnMoreURL} 
                  className='hover:text-black cursor-pointer transition-colors'
                >
                    Learn More &rarr;
                </a>
            </div>
        </div>
    </div>
  )
}

export default RightSection