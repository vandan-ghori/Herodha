import React, { useState } from "react";

import SellActionWindow from "./SellActionWindow";

const SellGeneralContext = React.createContext({
  openSellWindow: (uid, symbol, price) => {},
  closeSellWindow: () => {},
});

export const SellGeneralContextProvider = (props) => {
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState();
  const [selectedStockSymbol, setSelectedStockSymbol] = useState("");

  const handleOpenSellWindow = (uid, symbol,price) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
    setSelectedStockSymbol(symbol);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice();
    setSelectedStockSymbol("");
  };

  return (
    <SellGeneralContext.Provider
      value={{
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} symbol={selectedStockSymbol} price={selectedStockPrice} closeSellWindow={handleCloseSellWindow}/>}
    </SellGeneralContext.Provider>
  );
};

export default SellGeneralContext;