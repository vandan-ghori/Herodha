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
    await axios.post("https://herodha-backend.onrender.com/newOrder", {
      userId: user._id,
      name: uid,
      symbol,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "BUY",
      total: Number(stockPrice * stockQuantity),
    });

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div className="flex flex-col gap-5">
          <span>Margin required ₹140.65</span>
          <span>Total Price: ₹{(stockPrice * stockQuantity).toFixed(2)}</span>
        </div>

        <div>
          <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>

          <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
