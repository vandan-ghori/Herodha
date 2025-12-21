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
  return (
    <div className='flex w-full'>
      <SellGeneralContextProvider>
        <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      </SellGeneralContextProvider>
      <div>
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