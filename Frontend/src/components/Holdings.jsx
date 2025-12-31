import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);
  
  const fetchHoldings = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const res = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/allHoldings`, { withCredentials: true });
    setAllHoldings(res.data);
  };

  const fetchPrices = async () => {
    if (allHoldings.length === 0) return;

    const symbols = allHoldings.map(h => h.symbol);

    const res = await axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/api/prices`, {
      symbols
    }, { withCredentials: true });

    const priceMap = {};
    res.data.forEach(p => {
      priceMap[p.symbol] = p.price;
    });

    setAllHoldings(prev =>
      prev.map(h => {
        const cmp = priceMap[h.symbol] ?? h.price;
        const net = (cmp - h.avg) * h.qty;

        return {
          ...h,
          price: cmp,
          net: net.toFixed(2),
          day: net.toFixed(2),
        };
      })
    );
  };


   useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, [allHoldings.length]);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const totalInvestment = allHoldings.reduce(
    (s, h) => s + h.avg * h.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (s, h) => s + h.price * h.qty,
    0
  );

  const totalPL = currentValue - totalInvestment;
  const pnlClass = totalPL >= 0 ? "text-green-500" : "text-red-500";

  const dayPL = allHoldings.reduce(
    (s, h) => s + Number(h.day),
    0
  );

  const labels = allHoldings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Current Value',
        data: allHoldings.map((stock) => (stock.price)),
        backgroundColor: 'rgba(76, 175, 80, .8)',
      },
      {
        label: 'Buy Value',
        data: allHoldings.map((stock) => (stock.avg)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ]
  }

  return (
    <div className="p-4 md:p-10 w-full h-full overflow-y-auto bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2">
          Holdings <span className="text-lg text-gray-500 font-normal">({allHoldings.length})</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
            <h5 className="text-gray-500 text-sm mb-1">Total investment</h5>
            <h1 className="text-2xl font-semibold">₹{totalInvestment.toFixed(2)}</h1>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
            <h5 className="text-gray-500 text-sm mb-1">Current Value</h5>
            <h1 className="text-2xl font-semibold">₹{currentValue.toFixed(2)}</h1>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
            <h5 className="text-gray-500 text-sm mb-1">Day P&L</h5>
            <h1 className="text-2xl font-semibold text-green-500">₹{dayPL.toFixed(2)}</h1>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
            <h5 className="text-gray-500 text-sm mb-1">Total P&L</h5>
            <h1 className={`text-2xl font-semibold ${pnlClass}`}>₹{totalPL.toFixed(2)}</h1>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500 whitespace-nowrap">Instrument</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 whitespace-nowrap">Qty.</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 whitespace-nowrap">Avg. Cost</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 whitespace-nowrap">LTP</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 whitespace-nowrap">Cur. Val</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 whitespace-nowrap">P&L</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 whitespace-nowrap">Net Chg.</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 whitespace-nowrap">Day Chg.</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {allHoldings.map((stock, idx) => {
                const currValue = stock.price * stock.qty;
                const pl = currValue - stock.avg * stock.qty;

                return (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">{stock.name}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">{stock.qty}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">{stock.avg.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">{stock.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">{currValue.toFixed(2)}</td>
                    <td className={`px-4 py-3 text-right font-medium whitespace-nowrap ${pl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {pl.toFixed(2)}
                    </td>
                    <td className={`px-4 py-3 text-right font-medium whitespace-nowrap ${stock.net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.net}
                    </td>
                    <td className={`px-4 py-3 text-right font-medium whitespace-nowrap ${stock.day >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.day}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>

        <div className="w-full">
            <VerticalGraph data={data}/>
        </div>

      </div>
    </div>
  );
};

export default Holdings;
