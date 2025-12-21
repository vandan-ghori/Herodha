import React, { useState } from 'react'

const CreateTicket = () => {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)

  return (
    <div className='flex flex-col gap-10 mr-35 ml-35 p-10 '>
      <div className='w-full flex flex-col'>
        <button onClick={() => setOpen(!open)} className='hover:scale-101 border cursor-pointer flex gap-4'>
          <img className='w-16 p-4 bg-[#8abaf572]' src="images/add-circle-line.png" alt="" />
          <h1 className='text-2xl p-4'>Account Opening</h1>
        </button>

      {open && (
        <div className='p-10 border border-t-0'>
          <ul className='list-disc pl-5 flex flex-col gap-2 text-[#387ED1]'>
            <li className='cursor-pointer hover:text-black w-fit'>Resident Individual</li>
            <li className='cursor-pointer hover:text-black w-fit'>Minor</li>
            <li className='cursor-pointer hover:text-black w-fit'>Non Resident Indian (NRI)</li>
            <li className='cursor-pointer hover:text-black w-fit'>Comapny, Partnership, HUP and LLP</li>
            <li className='cursor-pointer hover:text-black w-fit'>Glossary</li>
          </ul>
        </div>
      )}
      </div>

      <div className='w-full flex flex-col'>
        <button onClick={() => setOpen1(!open1)} className='hover:scale-101 border cursor-pointer flex gap-4'>
          <img className='w-16 p-4 bg-[#8abaf572]' src="images/add-circle-line.png" alt="" />
          <h1 className='text-2xl p-4'>Your Herodha Account</h1>
        </button>

      {open1 && (
        <div className='p-10 border border-t-0'>
          <ul className='list-disc pl-5 flex flex-col gap-2 text-[#387ED1]'>
            <li className='cursor-pointer hover:text-black w-fit'>Your Profile</li>
            <li className='cursor-pointer hover:text-black w-fit'>Account Modification</li>
            <li className='cursor-pointer hover:text-black w-fit'>CMR and DP</li>
            <li className='cursor-pointer hover:text-black w-fit'>Nomination</li>
            <li className='cursor-pointer hover:text-black w-fit'>Transfer and Conversion of Securities</li>
          </ul>
        </div>
      )}
      </div>

      <div className='w-full flex flex-col'>
        <button onClick={() => setOpen2(!open2)} className='hover:scale-101 border cursor-pointer flex gap-4'>
          <img className='w-16 p-4 bg-[#8abaf572]' src="images/add-circle-line.png" alt="" />
          <h1 className='text-2xl p-4'>Kite</h1>
        </button>

      {open2 && (
        <div  className='p-10 border border-t-0'>
          <ul className='list-disc pl-5 flex flex-col gap-2 text-[#387ED1]'>
            <li className='cursor-pointer hover:text-black w-fit'>IPO</li>
            <li className='cursor-pointer hover:text-black w-fit'>Trading FAQs</li>
            <li className='cursor-pointer hover:text-black w-fit'>Margin Trading Facility (MTF) and Margins</li>
            <li className='cursor-pointer hover:text-black w-fit'>Charts and Orders</li>
            <li className='cursor-pointer hover:text-black w-fit'>Alerts and Nudges</li>
            <li className='cursor-pointer hover:text-black w-fit'>General</li>
          </ul>
        </div>
      )}
      </div>

      <div className='w-full flex flex-col'>
        <button onClick={() => setOpen3(!open3)} className='hover:scale-101 border cursor-pointer flex gap-4'>
          <img className='w-16 p-4 bg-[#8abaf572]' src="images/add-circle-line.png" alt="" />
          <h1 className='text-2xl p-4'>Funds</h1>
        </button>

      {open3 && (
        <div className='p-10 border border-t-0'>
          <ul className='list-disc pl-5 flex flex-col gap-2 text-[#387ED1]'>
            <li className='cursor-pointer hover:text-black w-fit'>Add money</li>
            <li className='cursor-pointer hover:text-black w-fit'>Withdraw money</li>
            <li className='cursor-pointer hover:text-black w-fit'>Add Bank Accounts</li>
            <li className='cursor-pointer hover:text-black w-fit'>Charts and Orders</li>
            <li className='cursor-pointer hover:text-black w-fit'>eMandates</li>
          </ul>
        </div>
      )}
      </div>

      <div className='w-full flex flex-col'>
        <button onClick={() => setOpen4(!open4)} className='hover:scale-101 border cursor-pointer flex gap-4'>
          <img className='w-16 p-4 bg-[#8abaf572]' src="images/add-circle-line.png" alt="" />
          <h1 className='text-2xl p-4'>Console</h1>
        </button>

      {open4 && (
        <div className='p-10 border border-t-0'>
          <ul className='list-disc pl-5 flex flex-col gap-2 text-[#387ED1]'>
            <li className='cursor-pointer hover:text-black w-fit'>Portfolio</li>
            <li className='cursor-pointer hover:text-black w-fit'>Corporate Actions</li>
            <li className='cursor-pointer hover:text-black w-fit'>Funds Statement</li>
            <li className='cursor-pointer hover:text-black w-fit'>Reports</li>
            <li className='cursor-pointer hover:text-black w-fit'>Profile</li>
            <li className='cursor-pointer hover:text-black w-fit'>Segments</li>
          </ul>
        </div>
      )}
      </div>
    </div>
  )
}

export default CreateTicket