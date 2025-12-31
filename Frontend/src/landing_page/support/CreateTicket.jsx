import React, { useState } from 'react'

const CreateTicket = () => {
  const [openStates, setOpenStates] = useState([false, false, false, false, false, false]);

  const toggle = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  const categories = [
    { title: "Account Opening", links: ["Resident Individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"] },
    { title: "Your Herodha Account", links: ["Your Profile", "Account Modification", "CMR and DP", "Nomination", "Transfer and Conversion"] },
    { title: "Kite", links: ["IPO", "Trading FAQs", "MTF and Margins", "Charts and Orders", "Alerts and Nudges", "General"] },
    { title: "Funds", links: ["Add money", "Withdraw money", "Add Bank Accounts", "eMandates"] },
    { title: "Console", links: ["Portfolio", "Corporate Actions", "Funds Statement", "Reports", "Segments"] },
    { title: "Coin", links: ["Mutual Funds", "NPS", "Features on Coin", "Payments and Orders", "General"] }
  ];

  return (
    <div className='flex flex-col gap-6 md:gap-10 max-w-6xl mx-auto p-6 md:p-10'>
      
      <h2 className="text-xl md:text-2xl text-gray-600 mb-2">To create a ticket, select a relevant topic</h2>

      {categories.map((cat, index) => (
        <div key={index} className='w-full flex flex-col'>
          <button 
            onClick={() => toggle(index)} 
            className='hover:bg-gray-50 border cursor-pointer flex items-center gap-4 transition-all'
          >
            <img 
              className='w-12 md:w-16 p-3 md:p-4 bg-[#8abaf572]' 
              src="images/add-circle-line.png" 
              alt="" 
            />
            <h1 className='text-lg md:text-2xl p-2 md:p-4 font-normal'>{cat.title}</h1>
          </button>

          {openStates[index] && (
            <div className='p-6 md:p-10 border border-t-0 animate-in fade-in slide-in-from-top-1'>
              <ul className='list-disc pl-5 flex flex-col gap-2 text-[#387ED1]'>
                {cat.links.map((link, i) => (
                  <li key={i} className='cursor-pointer hover:text-black w-fit'>{link}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CreateTicket