import React, { useContext, useState } from "react";
import axios from "axios";
import AddFundsContext from "./AddFundsContext";
import "./BuyActionWindow.css";

const AddFundsWindow = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const { closeAddFundsWindow } = useContext(AddFundsContext);

  const handleAddFunds = async () => {
    if (amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      setLoading(true);

      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        alert("User not logged in");
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_URL || "https://herodha-backend.onrender.com"}/funds/add`,
        { amount: Number(amount) },
        { withCredentials: true }
      );

      closeAddFundsWindow();
    } catch (err) {
      alert("Failed to add funds");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
  <div 
    className="w-full max-w-[95%] sm:max-w-md mx-auto p-6 bg-white border border-gray-100 rounded-xl shadow-2xl relative" 
    id="add-funds-window" 
    draggable="true"
  >
    <div className="regular-order">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Add Funds</h3>

      <fieldset className="w-full">
        <legend className="text-xs font-semibold px-1 text-gray-500 uppercase tracking-wider">
          Amount
        </legend>
        <input
          className="w-full border border-gray-300 p-3.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </fieldset>
    </div>
    <div className="buttons mt-8 flex flex-col sm:flex-row gap-3">
      <button
        className="w-full sm:flex-1 px-8 py-3.5 bg-[#387ed1] text-white font-bold rounded-lg hover:bg-blue-700 active:scale-[0.98] disabled:bg-gray-400 transition-all cursor-pointer"
        onClick={handleAddFunds}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add"}
      </button>

      <button
        className="w-full sm:flex-1 px-8 py-3.5 bg-gray-100 text-gray-600 font-semibold rounded-lg hover:bg-gray-200 active:scale-[0.98] transition-all cursor-pointer"
        onClick={closeAddFundsWindow}
      >
        Cancel
      </button>
    </div>
  </div>
</div>
  );
};

export default AddFundsWindow;
