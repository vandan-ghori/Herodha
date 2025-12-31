import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navgation = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 my-20 px-6 md:px-20 lg:mx-40 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:w-1/3">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Unbeatable pricing
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <button
          onClick={() => navgation("/pricing")}
          className="text-[#2e8cff] text-lg font-medium hover:underline cursor-pointer transition-all hover:translate-x-2"
        >
          See pricing &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4 lg:w-2/3">
        <div className="flex flex-col items-center text-center border border-gray-100 rounded-lg p-8 group hover:bg-gray-50 transition-all duration-300">
          <div className="relative mb-2">
            <img className="w-20 md:w-24" src="images/pricing-eq.svg" alt="0" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 leading-tight">
              Free account
              <br />
              opening
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center border border-gray-100 rounded-lg p-8 group hover:bg-gray-50 transition-all duration-300">
          <div className="relative mb-2">
            <img className="w-20 md:w-24" src="images/pricing-eq.svg" alt="0" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 leading-tight">
              Free equity delivery
              <br />& mutual funds
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center border border-gray-100 rounded-lg p-8 group hover:bg-gray-50 transition-all duration-300">
          <div className="relative mb-2">
            <img
              className="w-20 md:w-24"
              src="images/other-trades.svg"
              alt="20"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 leading-tight">
              Intraday and
              <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
