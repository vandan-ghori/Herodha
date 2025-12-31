import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../landing_page/context/AuthContext';

const formatNumber = (num) => {
  if (num >= 100000) return (num / 100000).toFixed(2) + "L";
  if (num >= 1000) return (num / 1000).toFixed(2) + "k";
  return num.toFixed(2);
};

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [funds, setFunds] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const fetchFunds = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user")); 
      const res = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/funds`, { withCredentials: true });
      setFunds(res.data);
    } catch (err) {
      console.error("Funds fetch failed");
    }
  };

  useEffect(() => {
    fetchFunds();
    const interval = setInterval(fetchFunds, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchHoldings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user")); 
      const res = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/allHoldings`, { withCredentials: true });
      setAllHoldings(res.data);
    } catch (err) {
      console.error("Holdings fetch failed", err);
    }
  };

  const fetchPrices = async () => {
    if (allHoldings.length === 0) return;

    try {
      const symbols = allHoldings.map((s) => s.symbol);

      const res = await axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/api/prices`, {
        symbols,
      }, { withCredentials: true });

      const priceMap = {};
      res.data.forEach((p) => {
        priceMap[p.symbol] = p.price;
      });

      setAllHoldings((prev) =>
        prev.map((stock) => {
          const cmp = priceMap[stock.symbol] ?? stock.price;
          const net = (cmp - stock.avg) * stock.qty;

          return {
            ...stock,
            price: cmp,
            net: net.toFixed(2),
            day: net.toFixed(2),
          };
        })
      );
    } catch (err) {
      console.error("Price fetch failed", err);
    }
  };

  useEffect(() => {
    fetchHoldings();
  },[]);

  useEffect(() => {
    if (allHoldings.length === 0) return;
    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, [allHoldings.length]);

  const totalInvestment = allHoldings.reduce(
    (sum, h) => sum + h.avg * h.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, h) => sum + h.price * h.qty,
    0
  );

  const totalPL = currentValue - totalInvestment;
  const pnlClass = totalPL >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className='bg-gray-50 p-4 md:p-10 h-full w-full'>
      <h1 className='text-3xl font-light mb-6'>Hi, User</h1>
      <hr className='border-gray-200' />
      
      {funds && (
        <div className="py-6 flex flex-col gap-6">
          <h1 className="text-xl font-medium text-gray-700">Equity</h1>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="flex-1 p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col gap-2 justify-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-green-600">
                ₹{formatNumber(funds.availableMargin)}
              </h1>
              <p className="text-gray-500 text-sm font-medium">Margin Available</p>
            </div>

            <div className="hidden lg:block w-px bg-gray-300"></div>

            <div className="flex-1 flex flex-col gap-4 justify-center">
              <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm border border-gray-100">
                <p className="text-gray-600">Margin Used</p>
                <span className="font-semibold text-lg">₹{formatNumber(funds.usedMargin)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm border border-gray-100">
                <p className="text-gray-600">Opening Balance</p>
                <span className="font-semibold text-lg">₹{formatNumber(funds.openingBalance)}</span>
              </div>
            </div>
          </div>
        </div>
      )}


      <hr className='border-gray-200' />

      <div className='py-6 flex flex-col gap-6'>
        <h1 className='text-xl font-medium text-gray-700'>Holdings</h1>
        
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          <div className='flex-1 p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col gap-2 justify-center'>
             <h1 className={`text-4xl lg:text-5xl font-bold ${pnlClass}`}>
               {formatNumber(totalPL)} <span className="text-sm text-gray-400 font-normal">(P&L)</span>
             </h1>
          </div>
          
          <div className="hidden lg:block w-px bg-gray-300"></div>

          <div className='flex-1 flex flex-col gap-4 justify-center'>
            <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm border border-gray-100">
               <p className="text-gray-600">Current Value</p>
               <span className="font-semibold text-lg">{formatNumber(currentValue)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm border border-gray-100">
               <p className="text-gray-600">Investment</p>
               <span className="font-semibold text-lg">{formatNumber(totalInvestment)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary