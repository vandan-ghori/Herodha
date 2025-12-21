import React from 'react'
import TopBar from './TopBar'
import Dashboard from './Dashboard'
import { AddFundsContextProvider } from './AddFundsContext'

const Home = () => {
  return (
    <div>
        <TopBar />
        <AddFundsContextProvider>
          <Dashboard />
        </AddFundsContextProvider>
    </div>
  )
}

export default Home