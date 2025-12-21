import React, { useState, useContext, useEffect } from "react";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import GeneralContext from "./GeneralContext";
import SellGeneralContext from "./SellGeneralContext";
import axios from "axios";

const WatchList = () => {
  const [prices, setPrices] = useState({});
  const [query, setQuery] = useState("");

  const filteredWatchlist = watchlist.filter((stock) => {
    const q = query.toLowerCase();

    return (
      stock.name.toLowerCase().includes(q) ||
      stock.symbol.toLowerCase().includes(q) ||
      (stock.exchange && stock.exchange.toLowerCase().includes(q))
    );
  });

  const fetchPrices = async () => {
    try {
      const symbols = watchlist.map((s) => s.symbol);
      const res = await axios.post("https://herodha-backend.onrender.com/api/prices", {
        symbols,
      });
      setPrices((prev) => {
        const updated = { ...prev };

        res.data.forEach(({ symbol, price }) => {
          updated[symbol] = {
            price,
            prevPrice: prev[symbol]?.price ?? price,
          };
        });

        return updated;
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border relative border-gray-300 bg-white rounded-lg h-[93vh] hide-scrollbar overflow-y-auto ml-10 w-[27.4%]">
      <div className="flex items-center border-b border-gray-300 p-2 gap-0">
        <input
          className="w-[85%] px-2 py-1 focus:outline-none text-sm"
          placeholder="Search eg: BPCL, Grasim, TCS..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="text-xs px-2 text-gray-500">
          {filteredWatchlist.length} / {watchlist.length}
        </span>
      </div>

      {filteredWatchlist.length === 0 && (
        <div className="text-center text-sm text-gray-400 mt-4">
          No matching stocks found
        </div>
      )}

      <ul className="m-2 space-y-1">
        {filteredWatchlist.map((stock, idx) => {
          const priceObj = prices[stock.symbol] || {};
          return (
            <WatchListItem
              stock={{
                ...stock,
                price: priceObj.price ?? stock.price,
                prevPrice: priceObj.prevPrice,
              }}
              key={stock.symbol ?? idx}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [itemHover, setItemHover] = useState(false);
  const isDown = stock.prevPrice !== undefined && stock.price < stock.prevPrice;

  return (
    <li
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
      className="px-3 py-2 relative rounded-md hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium">{stock.name}</div>
          <div className="text-xs text-gray-400">{stock.exchange ?? ""}</div>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`text-sm font-semibold ${
              isDown ? "text-red-600" : "text-green-600"
            }`}
          >
            {stock.percent}
          </span>

          {isDown ? (
            <KeyboardArrowDown className="text-red-600" fontSize="small" />
          ) : (
            <KeyboardArrowUp className="text-green-600" fontSize="small" />
          )}

          <span className="text-sm">{stock.price}</span>
        </div>
      </div>

      {itemHover && (
        <WatchListAction
          uid={stock.name}
          symbol={stock.symbol}
          price={stock.price}
        />
      )}
    </li>
  );
};

const WatchListAction = ({ uid, symbol, price }) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, symbol, price);
  };

  const sellGeneralContext = useContext(SellGeneralContext);
  const handleSellClick = () => {
    sellGeneralContext.openSellWindow(uid, symbol, price);
  };

  return (
    <span className="flex absolute right-3 top-0 items-center mt-2 gap-2">
      <span className="flex gap-1 bg-amber-50">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            aria-label={`Buy ${uid}`}
            className="cursor-pointer w-8 h-6 rounded-sm bg-[#387ED1] hover:bg-[#384ED1] transition flex items-center justify-center text-white text-xs"
            onClick={handleBuyClick}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            aria-label={`Sell ${uid}`}
            className="w-8 h-6 cursor-pointer rounded-sm bg-red-500 hover:bg-red-700 transition flex items-center justify-center text-white text-xs"
            onClick={handleSellClick}
          >
            Sell
          </button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            aria-label={`Analytics ${uid}`}
            className="w-8 bg-amber-500 h-6 cursor-pointer rounded-sm transition flex items-center justify-center text-white text-xs"
          >
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button
            aria-label={`More ${uid}`}
            className="w-9 h-6 cursor-pointer rounded-sm bg-[#fae350] hover:bg-[#d7bf26] transition flex items-center justify-center text-black text-xs"
          >
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
