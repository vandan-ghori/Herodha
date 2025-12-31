const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");

module.exports.newOrder = async (req, res) => {
  const userId = req.user._id;
  
  await OrdersModel.create({
      ...req.body,
      userId: userId
  });
  res.json({ message: "Order saved" });
};

module.exports.executeOrder = async (req, res) => {
    try {
      const order = await OrdersModel.findById(req.params.id);
      if (!order) return res.status(404).json({ message: "Order not found" });
      if (order.userId.toString() !== req.user._id.toString()) {
          return res.status(401).json({ message: "Not authorized" });
      }

      const { userId, symbol, qty, price, mode, name } = order;
      let holding = await HoldingsModel.findOne({ userId, symbol });
  
      if (mode === "BUY") {
        if (holding) {
          const totalQty = holding.qty + qty;
          const newAvg =
            (holding.avg * holding.qty + price * qty) / totalQty;
  
          holding.qty = totalQty;
          holding.avg = Number(newAvg.toFixed(2));
          holding.price = price;
          await holding.save();
        } else {
          await HoldingsModel.create({
            userId,
            name,
            symbol,
            qty,
            avg: price,
            price,
          });
        }
      }
  
      if (mode === "SELL") {
        if (!holding || holding.qty < qty) {
          return res.status(400).json({ message: "Not enough quantity" });
        }
  
        if (holding.qty === qty) {
          await HoldingsModel.deleteOne({ _id: holding._id });
        } else {
          holding.qty -= qty;
          await holding.save();
        }
      }
  
      await OrdersModel.findByIdAndDelete(order._id);
      res.json({ message: "Order executed successfully" });
    } catch (err) {
      console.error("EXECUTE ERROR:", err);
      res.status(500).json({ message: "Execution failed" });
    }
  };

module.exports.cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const userId = req.user._id;

    const order = await OrdersModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.userId.toString() !== userId.toString()) {
      return res.status(401).json({ message: "Not authorized to cancel this order" });
    }

    await OrdersModel.findByIdAndDelete(orderId);
    res.json({ message: "Order cancelled successfully" });
  } catch (err) {
    console.error("CANCEL ERROR:", err);
    res.status(500).json({ message: "Cancellation failed" });
  }
};
