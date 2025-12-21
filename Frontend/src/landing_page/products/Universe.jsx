import React from 'react'

const Universe = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='flex mt-10 mb-10 flex-col items-center gap-5'>
            <h1 className='text-3xl'>The Herodha Universe</h1>
            <p className='text-xl'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-between gap-5'>
                <div className='flex flex-col gap-6'>
                    <img className='w-[12vw]' src="images/zerodhafundhouse.png" alt="" />
                    <p className='text-[.9vw]'>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>                
                </div>
                <div className='flex flex-col gap-7'>
                    <img className='w-[17vw]' src="images/sensibull-logo.svg" alt="" />
                    <p className='text-[.9vw]'>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <img className='w-[12vw]' src="images/tijori.svg" alt="" />
                    <p className='text-[.9vw]'>Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5'>
                <div className='flex flex-col gap-8'>
                    <img className='w-[12vw]' src="images/streak-logo.png" alt="" />
                    <p className='text-[.9vw]'>Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img className='w-[12vw]' src="images/smallcase-logo.png" alt="" />
                    <p className='text-[.9vw]'>Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <img className='w-[12vw]' src="images/ditto-logo.png" alt="" />
                    <p className='text-[.9vw]'>Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
                </div>
            </div>
        </div>
        <button onClick={() => navgation("/signup")} className='cursor-pointer mt-10 p-2 w-[25%] text-xl hover:bg-black border rounded-md bg-[#387ed1] text-white ' >Sign up for free</button>
    </div>
  )
}

export default Universe