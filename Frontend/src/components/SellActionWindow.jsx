import React, { useState } from "react";
import axios from "axios";

import "./BuyActionWindow.css";

const SellActionWindow = ({uid, symbol, price, closeSellWindow}) => {

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(price);
    const totalPrice = (stockPrice * stockQuantity).toFixed(2);
    const user = JSON.parse(localStorage.getItem("user"));
    
    const handleSellClick = () => {
        axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/newOrder`, {
        name: uid,
        symbol,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
        total: totalPrice,
        }, { withCredentials: true });

        closeSellWindow();
    };

    const handleCancelClick = () => {
        closeSellWindow();
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
  <div 
    className="w-full max-w-[95%] sm:max-w-md mx-auto p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-2xl relative" 
    id="buy-window" 
    draggable="true"
  >
    <div className="regular-order">
      <div className="inputs flex flex-col sm:flex-row gap-4">
        <fieldset className="flex-1">
          <legend className="text-xs font-semibold px-1 text-gray-500 uppercase tracking-wider">Qty.</legend>
          <input
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            type="number"
            name="qty"
            id="qty"
            onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}
          />
        </fieldset>
        
        <fieldset className="flex-1">
          <legend className="text-xs font-semibold px-1 text-gray-500 uppercase tracking-wider">Price</legend>
          <input
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            type="number"
            name="price"
            id="price"
            step="0.05"
            onChange={(e) => setStockPrice(e.target.value)}
            value={stockPrice}
          />
        </fieldset>
      </div>
    </div>

    <div className="buttons mt-8 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400 font-medium">ESTIMATED TOTAL</span>
        <span className="text-xl font-bold text-gray-800">
          ₹{(stockPrice * stockQuantity).toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          className="btn btn-red cursor-pointer flex-1 text-center px-8 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 active:transform active:scale-[0.98] transition-all" 
          onClick={handleSellClick}
        >
          Sell
        </button>
        <button 
          className="btn btn-grey cursor-pointer flex-1 text-center px-8 py-3 bg-gray-100 text-gray-600 font-semibold rounded-lg hover:bg-gray-200 active:transform active:scale-[0.98] transition-all" 
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default SellActionWindow