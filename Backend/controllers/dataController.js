const { HoldingsModel } = require("../model/HoldingsModel");
const { OrdersModel } = require("../model/OrdersModel");
const FundsModel = require("../model/FundsModel");

module.exports.getHoldings = async (req, res) => {
  const holdings = await HoldingsModel.find({ userId: req.user._id });
  res.json(holdings);
};

module.exports.getOrders = async (req, res) => {
  const orders = await OrdersModel.find({ userId: req.user._id });
  res.json(orders);
};

module.exports.getFunds = async (req, res) => {
  try {
    const userId = req.user._id;

    const funds = await FundsModel.findOne({ userId });
    if (!funds) {
        return res.json({
            openingBalance: 0,
            usedMargin: 0,
            availableMargin: 0
        })
    }

    const holdings = await HoldingsModel.find({ userId });

    const usedMargin = holdings.reduce(
      (sum, h) => sum + h.avg * h.qty,
      0
    );

    res.json({
      openingBalance: funds.balance,
      usedMargin,
      availableMargin: funds.balance - usedMargin,
    });
  } catch (err) {
    res.status(500).json({ message: "Funds fetch failed" });
  }
};

module.exports.addFunds = async (req, res) => {
    try {
      const { amount } = req.body;
      const userId = req.user._id;
  
      if (amount <= 0) {
        return res.status(400).json({ message: "Invalid amount" });
      }
  
      const funds = await FundsModel.findOne({ userId });
      if (!funds) {
          await FundsModel.create({
              userId,
              balance: Number(amount)
          });
      } else {
        funds.balance += Number(amount);
        await funds.save();
      }
  
      res.json({ message: "Funds added successfully" });
    } catch (err) {
      res.status(500).json({ message: "Add funds failed" });
    }
  };
