import React, { useState } from "react";
import AddFundsWindow from "./AddFundsWindow";

const AddFundsContext = React.createContext({
  isOpen: false,
  openAddFundsWindow: () => {},
  closeAddFundsWindow: () => {},
});

export const AddFundsContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAddFundsWindow = () => setIsOpen(true);
  const closeAddFundsWindow = () => setIsOpen(false);

  return (
    <AddFundsContext.Provider
      value={{ openAddFundsWindow, closeAddFundsWindow }}
    >
      {children}
      {isOpen && <AddFundsWindow />}
    </AddFundsContext.Provider>
  );
};

export default AddFundsContext;
