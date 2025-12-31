import React from 'react'
import Hero from './Hero'
import Team from './Team'
import Navbar from '../Navbar'
import Footer from '../Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />
      <main className="pt-20 md:pt-28 overflow-x-hidden">
        <section className="animate-in fade-in duration-700">
          <Hero />
        </section>
        <section className="bg-white py-10 md:py-20 border-t border-gray-50">
          <Team />
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default AboutPage