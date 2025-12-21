import { useState } from 'react'
import Home from './landing_page/home/Homepage'
import { Route, Routes } from 'react-router-dom'
import SignUp from './landing_page/signup/SignUp'
import SupportPage from './landing_page/support/SupportPage'
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import PricingPage from './landing_page/pricing/PricingPage'
import Login from './landing_page/login/login'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import Dashboard from './components/Home';
import ProtectedRoute from './landing_page/context/ProtectedRoute'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/*' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
