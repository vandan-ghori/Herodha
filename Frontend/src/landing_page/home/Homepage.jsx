import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex flex-col overflow-x-hidden">
        <section className="pt-16 md:pt-20">
          <Hero />
        </section>
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          <Stats />

          <Pricing />

          <Education />

          <OpenAccount />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
