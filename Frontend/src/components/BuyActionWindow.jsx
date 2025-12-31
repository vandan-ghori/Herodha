import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, symbol, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const generalContext = useContext(GeneralContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleBuyClick = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/newOrder`, {
      name: uid,
      symbol,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "BUY",
      total: Number(stockPrice * stockQuantity),
    }, { withCredentials: true });

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
  <div 
    className="w-full max-w-md mx-auto p-5 md:p-6 bg-white rounded-lg shadow-xl relative" 
    id="buy-window"
  >
    <div className="regular-order">
      <div className="inputs flex flex-col sm:flex-row gap-4">
        <fieldset className="flex-1">
          <legend className="text-sm font-medium px-1 text-gray-500">Qty.</legend>
          <input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(Number(e.target.value))}
          />
        </fieldset>

        <fieldset className="flex-1">
          <legend className="text-sm font-medium px-1 text-gray-500">Price</legend>
          <input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            step="0.05"
            value={stockPrice}
            onChange={(e) => setStockPrice(Number(e.target.value))}
          />
        </fieldset>
      </div>
    </div>

    <div className="buttons mt-6 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 text-sm md:text-base">
        <span className="font-bold text-blue-600">
          Total Price: ₹{(stockPrice * stockQuantity).toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-3">
        <button 
          type="button" 
          className="w-full sm:flex-1 cursor-pointer px-6 py-2.5 rounded bg-gray-200 font-medium hover:bg-gray-300 transition-colors" 
          onClick={handleCancelClick}
        >
          Cancel
        </button>
        <button 
          type="button" 
          className="w-full sm:flex-1 cursor-pointer px-6 py-2.5 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors" 
          onClick={handleBuyClick}
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default BuyActionWindow;
