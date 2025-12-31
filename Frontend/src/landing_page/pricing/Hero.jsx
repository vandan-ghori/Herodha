import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-12 py-16 md:py-24 px-6 md:px-20 lg:px-40">
      <div className="flex flex-col items-center text-center gap-3 border-b border-gray-100 pb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Charges
        </h1>
        <p className="text-lg md:text-xl text-gray-500">
          List of all charges and taxes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        <div className="flex flex-col items-center text-center gap-5 group">
          <div className="transform transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-24 md:w-32"
              src="images/pricing-eq.svg"
              alt="Free Equity"
            />
          </div>
          <h2 className="text-2xl font-medium text-gray-800">
            Free equity delivery
          </h2>
          <p className="text-base md:text-[1.05rem] text-gray-500 leading-relaxed">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-5 group">
          <div className="transform transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-24 md:w-32"
              src="images/other-trades.svg"
              alt="Intraday Trades"
            />
          </div>
          <h2 className="text-2xl font-medium text-gray-800">
            Intraday and F&O trades
          </h2>
          <p className="text-base md:text-[1.05rem] text-gray-500 leading-relaxed">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-5 group">
          <div className="transform transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-24 md:w-32"
              src="images/pricing-eq.svg"
              alt="Free Mutual Funds"
            />
          </div>
          <h2 className="text-2xl font-medium text-gray-800">Free direct MF</h2>
          <p className="text-base md:text-[1.05rem] text-gray-500 leading-relaxed">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
