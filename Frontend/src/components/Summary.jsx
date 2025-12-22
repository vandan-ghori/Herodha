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
      const res = await axios.get(`https://herodha-backend.onrender.com/funds/${user._id}`);
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
      const res = await axios.get(`https://herodha-backend.onrender.com/allHoldings/${user._id}`);
      setAllHoldings(res.data);
    } catch (err) {
      console.error("Holdings fetch failed", err);
    }
  };

  const fetchPrices = async () => {
    if (allHoldings.length === 0) return;

    try {
      const symbols = allHoldings.map((s) => s.symbol);

      const res = await axios.post("https://herodha-backend.onrender.com/api/prices", {
        symbols,
      });

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
    <div className='bg-gray-100 p-30 h-full w-full mr-65'>
      <h1 className='text-3xl p-4'>Hi, User</h1>
      <hr />
      {funds && (
        <div className="p-4 flex flex-col gap-5">
          <h1 className="text-xl">Equity</h1>

          <div className="flex gap-30">
            <div className="p-3 flex flex-col gap-2">
              <h1 className="text-5xl text-green-600">
                ₹{formatNumber(funds.availableMargin)}
              </h1>
              <p className="text-gray-600">Margin Available</p>
            </div>

            <hr />

            <div className="p-2 flex flex-col gap-2">
              <p>
                Margin Used{" "}
                <span className="font-medium">
                  ₹{formatNumber(funds.usedMargin)}
                </span>
              </p>
              <p>
                Opening Balance{" "}
                <span className="font-medium">
                  ₹{formatNumber(funds.openingBalance)}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}


      <hr />

      <div className='p-4 flex flex-col gap-5'>
        <h1 className='text-xl'>Holdings</h1>
        <div className='flex gap-30'>
          <div className='p-3 flex flex-col gap-2'>
            <h1 className={`text-5xl ${pnlClass}`}>{formatNumber(totalPL)}</h1>
            <p className='text-gray-600'>P&L</p>
          </div>
          <hr />
          <div className='p-2 ml-5 flex flex-col gap-2'>
            <p>Current Value{" "}<span>{formatNumber(currentValue)}</span></p>
            <p>Investment{" "}<span>{formatNumber(totalInvestment)}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
