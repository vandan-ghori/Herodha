import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AddFundsContext from "./AddFundsContext";

const format = (num) =>
  Number(num).toLocaleString("en-IN", { maximumFractionDigits: 2 });

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const { openAddFundsWindow } = useContext(AddFundsContext);

  const fetchFunds = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      const res = await axios.get(
        `https://herodha-backend.onrender.com/funds/${user._id}`
      );

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

  if (!funds) {
    return <div className="p-20">Loading funds...</div>;
  }

  return (
    <div className="p-20 bg-gray-50 h-full w-[70vw] fixed right-0 top-10 overflow-y-scroll">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Funds</h1>
        <button
          className="btn btn-blue"
          onClick={openAddFundsWindow}
        >
          Add Funds
        </button>
      </div>

      <hr />

      <div className="grid grid-cols-3 gap-10 mt-8">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Available Margin</p>
          <h2 className="text-3xl font-semibold text-green-600">
            ₹{format(funds.availableMargin)}
          </h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Used Margin</p>
          <h2 className="text-3xl font-semibold text-red-500">
            ₹{format(funds.usedMargin)}
          </h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Opening Balance</p>
          <h2 className="text-3xl font-semibold">
            ₹{format(funds.openingBalance)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Funds;
