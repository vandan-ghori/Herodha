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
        `${import.meta.env.VITE_API_URL || "http://localhost:2020"}/funds/add`,
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
    <div className="container" id="add-funds-window" draggable="true">
      <div className="regular-order">
        <h3 className="text-xl mb-4">Add Funds</h3>

        <fieldset>
          <legend>Amount</legend>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </fieldset>
      </div>

      <div className="buttons">
        <button
          className="btn btn-blue"
          onClick={handleAddFunds}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </button>

        <button
          className="btn btn-grey"
          onClick={closeAddFundsWindow}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddFundsWindow;
