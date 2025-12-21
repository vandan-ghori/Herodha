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
    const res = await axios.get(`https://herodha-backend.onrender.com/allHoldings/${user._id}`);
    setAllHoldings(res.data);
  };

  const fetchPrices = async () => {
    if (allHoldings.length === 0) return;

    const symbols = allHoldings.map(h => h.symbol);

    const res = await axios.post("https://herodha-backend.onrender.com/api/prices", {
      symbols
    });

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
    <div style={{ scrollbarWidth: "none"}} className="p-20 pt-15 w-[70vw] h-full overflow-y-scroll bg-gray-50 fixed right-0 top-10">
      <div className="mb-30">
        <h3 className="p-5 text-3xl font-semibold">Holdings ({allHoldings.length})</h3>
        <hr />
        <div className="flex p-6 justify-between">
          <div>
            <h5 className="text-gray-500">Total investment</h5>
            <h1 className="text-3xl font-semibold">{totalInvestment.toFixed(2)}</h1>
          </div>
          <div>
            <h5 className="text-gray-500">Current Value</h5>
            <h1 className="text-3xl font-semibold">{currentValue.toFixed(2)}</h1>
          </div>
          <div>
            <h5 className="text-gray-500">Day P&L</h5>
            <h1 className="text-3xl font-semibold text-green-500">{dayPL.toFixed(2)}</h1>
          </div>
          <div>
            <h5 className="text-gray-500">Total P&L</h5>
            <h1 className={`text-3xl font-semibold ${pnlClass}`}>{totalPL.toFixed(2)}</h1>
          </div>
        </div>

        <hr />
        <div className="p-6  max-h-[65vh] mb-10">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-10 py-2 text-left border-b border-gray-300">Instruction</th>
                <th className="px-2 py-2 text-left border-b border-gray-300">Qty.</th>
                <th className="px-2 py-2 text-left border-b border-gray-300">Avg. Cost</th>
                <th className="px-2 py-2 text-left border-b border-gray-300">LTP</th>
                <th className="px-2 py-2 text-left border-b border-gray-300">Cur. Val</th>
                <th className="px-2 py-2 text-left border-b border-gray-300">P&amp;L</th>
                <th className="px-2 py-2 text-left border-b border-gray-300">Net Chg.</th>
                <th className="px-2 py-2 text-left border-b border-gray-300">Day Chg.</th>
              </tr>
            </thead>

            <tbody>
              {allHoldings.map((stock, idx) => {
                const currValue = stock.price * stock.qty;
                const pl = currValue - stock.avg * stock.qty;

                return (
                  <tr
                    key={idx}
                    className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 border-b"
                  >
                    <td className="px-10 py-2">{stock.name}</td>
                    <td className="px-2 py-2">{stock.qty}</td>
                    <td className="px-2 py-2">{stock.avg.toFixed(2)}</td>
                    <td className="px-2 py-2">{stock.price.toFixed(2)}</td>
                    <td className="px-2 py-2">{currValue.toFixed(2)}</td>
                    <td className={`px-2 py-2 font-medium `}>
                      {pl.toFixed(2)}
                    </td>
                    <td className={`px-2 py-2 font-medium`}>
                      {stock.net}
                    </td>
                    <td className={`px-2 py-2 font-medium `}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </div>
  );
};

export default Holdings;
