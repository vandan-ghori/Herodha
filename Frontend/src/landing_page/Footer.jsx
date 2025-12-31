import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-gray-200 bg-[#fbfbfb] pt-12 md:pt-20 pb-10'>  
      <div className='px-6 md:px-20 lg:mx-40'>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4'>
          
          <div className='flex text-gray-500 flex-col gap-4 sm:col-span-2 lg:col-span-1'>
            <img className='w-32 md:w-40' src="images/Herodha.png" alt="Logo" />
            <p className='text-sm leading-relaxed'>
              © 2010 - 2025, Herodha Broking Ltd. <br /> All rights reserved.
            </p>
            <div className='flex gap-4'>
              <button className='opacity-60 hover:opacity-100 transition-all hover:scale-110'><img className="w-5" src="images/twitter-x-line.png" alt="Twitter" /></button>
              <button className='opacity-60 hover:opacity-100 transition-all hover:scale-110'><img className="w-5" src="images/facebook-box-fill.png" alt="Facebook" /></button>
              <button className='opacity-60 hover:opacity-100 transition-all hover:scale-110'><img className="w-5" src="images/instagram-line.png" alt="Instagram" /></button>
              <button className='opacity-60 hover:opacity-100 transition-all hover:scale-110'><img className="w-5" src="images/linkedin-fill.png" alt="LinkedIn" /></button>
            </div>
            <hr className="w-1/2 border-gray-200" />
            <div className='flex gap-4'>
              <button className='opacity-60 hover:opacity-100 transition-all hover:scale-110'><img className="w-5" src="images/youtube-fill.png" alt="YouTube" /></button>
              <button className='opacity-60 hover:opacity-100 transition-all hover:scale-110'><img className="w-5" src="images/whatsapp-line.png" alt="WhatsApp" /></button>
              <button className='opacity-60 hover:opacity-100 transition-all hover:scale-110'><img className="w-5" src="images/telegram-fill.png" alt="Telegram" /></button>
            </div>
          </div>

          <div className='text-gray-500 flex flex-col gap-3'>
            <h1 className='text-lg font-medium text-gray-800 mb-2'>Account</h1>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Minor demat account</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Open demat account</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>NRI demat account</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Commodity</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Dematerialisation</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Fund transfer</h2>
          </div>

          <div className='text-gray-500 flex flex-col gap-3'>
            <h1 className='text-lg font-medium text-gray-800 mb-2'>Support</h1>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Support portal</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Contact us</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>How to file a complaint?</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Status of your complaints</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Bulletin</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Circular</h2>
          </div>

          <div className='text-gray-500 flex flex-col gap-3'>
            <h1 className='text-lg font-medium text-gray-800 mb-2'>Company</h1>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>About</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Philosophy</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Press & media</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Careers</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Herodha Cares (CSR)</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Herodha.tech</h2>
          </div>

          <div className='text-gray-500 flex flex-col gap-3'>
            <h1 className='text-lg font-medium text-gray-800 mb-2'>Quick links</h1>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Upcoming IPOs</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Brokerage charges</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Market holidays</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Economic calendar</h2>
            <h2 className='hover:text-[#387ed1] text-sm cursor-pointer transition-colors'>Calculators</h2>
          </div>
        </div>

        <div className='mt-16 text-gray-400 text-[10px] md:text-[11px] leading-loose space-y-4 border-t border-gray-200 pt-8'>
          <p>Herodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Herodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Herodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day."</p>
          
          <div className='flex flex-wrap justify-center mt-6 gap-x-6 gap-y-2 text-[12px] font-medium text-gray-500'>
            <h2 className='hover:text-[#387ed1] cursor-pointer transition-colors'>NSE</h2>
            <h2 className='hover:text-[#387ed1] cursor-pointer transition-colors'>BSE</h2>
            <h2 className='hover:text-[#387ed1] cursor-pointer transition-colors'>MCX</h2>
            <h2 className='hover:text-[#387ed1] cursor-pointer transition-colors'>Terms & Conditions</h2>
            <h2 className='hover:text-[#387ed1] cursor-pointer transition-colors'>Privacy Policy</h2>
            <h2 className='hover:text-[#387ed1] cursor-pointer transition-colors'>Investor Charter</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer