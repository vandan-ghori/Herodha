import React from 'react'
import WatchList from './WatchList'
import Orders from './Orders'
import Holdings from './Holdings'
import Funds from './Funds'
import Summary from './Summary'
import { Routes, Route } from 'react-router-dom'
import { GeneralContextProvider } from './GeneralContext'
import SellGeneralContext, { SellGeneralContextProvider } from './SellGeneralContext'

const Dashboard = () => {
  const [isWatchlistOpen, setIsWatchlistOpen] = React.useState(false); 

  return (
    <div className='flex w-full relative h-[calc(100vh-60px)] overflow-hidden'> 
      <SellGeneralContextProvider>
        <GeneralContextProvider>
            <div className={`
                fixed inset-y-0 left-0 z-30 w-[120%] bg-white shadow-2xl transition-transform duration-300 transform 
                md:relative md:translate-x-0 md:w-auto md:shadow-none md:flex-initial
                ${isWatchlistOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <WatchList />
                
                <button 
                    onClick={() => setIsWatchlistOpen(false)}
                    className="md:hidden absolute top-4 right-4 p-2 bg-gray-100 rounded-full"
                >
                    ✕
                </button>
            </div>
            {isWatchlistOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setIsWatchlistOpen(false)}
                />
            )}
      </GeneralContextProvider>
      </SellGeneralContextProvider>

      <div className='flex-1 w-full md:w-[67%] overflow-y-auto relative bg-gray-50'>
         <button 
            onClick={() => setIsWatchlistOpen(true)}
            className="md:hidden fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center font-bold"
            aria-label="Open Watchlist"
         >
            Stocks
         </button>

        <Routes>
          <Route exact path='/summary' element={<Summary/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/holdings' element={<Holdings/>}/>
          <Route path='/funds' element={<Funds/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard