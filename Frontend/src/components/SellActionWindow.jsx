import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./BuyActionWindow.css";
import SellGeneralContext from "./SellGeneralContext";

const SellActionWindow = ({uid,symbol, price}) => {

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(price);
    const totalPrice = (stockPrice * stockQuantity).toFixed(2);
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSellClick = () => {
        axios.post("http://localhost:2020/newOrder", {
        userId: user._id,
        name: uid,
        symbol,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
        total: totalPrice,
        });

        SellGeneralContext.closeSellWindow();
    };

    const handleCancelClick = () => {
        SellGeneralContext.closeSellWindow();
    };

  return (
    <div className="container" id="buy-window" draggable="true">
          <div className="regular-order">
            <div className="inputs">
              <fieldset>
                <legend>Qty.</legend>
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  onChange={(e) => setStockQuantity(e.target.value)}
                  value={stockQuantity}
                />
              </fieldset>
              <fieldset>
                <legend>Price</legend>
                <input
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
    
          <div className="buttons">
            <div className="flex flex-col gap-5">
              <span>Margin required ₹140.65</span>
              <span>Total Price: ₹{(stockPrice*stockQuantity).toFixed(2)}</span>
            </div>
            <div>
              <Link className="btn btn-red" onClick={handleSellClick}>
                Sell
              </Link>
              <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
              </Link>
            </div>
          </div>
        </div>
  )
}

export default SellActionWindow