import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AddFundsContext from "./AddFundsContext";

const format = (num) =>
  Number(num).toLocaleString("en-IN", { maximumFractionDigits: 2 });

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const addFundsContext = useContext(AddFundsContext);

  const fetchFunds = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL || "http://localhost:2020"}/funds`,
        { withCredentials: true }
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
    <div className="p-4 md:p-10 bg-gray-50 h-full w-full overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Funds</h1>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm"
            onClick={addFundsContext.openAddFundsWindow}
          >
            Add Funds
          </button>
        </div>

        <hr className="border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between h-40">
            <p className="text-gray-500 font-medium">Available Margin</p>
            <h2 className="text-3xl font-bold text-green-600">
              ₹{format(funds.availableMargin)}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between h-40">
            <p className="text-gray-500 font-medium">Used Margin</p>
            <h2 className="text-3xl font-bold text-red-500">
              ₹{format(funds.usedMargin)}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between h-40">
            <p className="text-gray-500 font-medium">Opening Balance</p>
            <h2 className="text-3xl font-bold text-gray-800">
              ₹{format(funds.openingBalance)}
            </h2>
          </div>
        </div>

        {showAddFunds && (
          <AddFundsModal
            onClose={() => setShowAddFunds(false)}
            onSuccess={fetchFunds}
          />
        )}
      </div>
    </div>
  );
};

export default Funds;
