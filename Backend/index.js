require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const { HoldingsModel } = require('./model/HoldingsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { UsersModel} = require('./model/UsersModel');

const PORT = process.env.PORT || 2020;
const url = process.env.MONGO_URL;
const FundsModel = require("./model/FundsModel")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pricesRoute = require("./routes/prices");
app.use("/api", pricesRoute);

const indicesRoute = require("./routes/indices");
app.use("/api", indicesRoute);

app.post("/newUser", async (req, res) => {
  try {
    const user = await UsersModel.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    await FundsModel.create({
      userId: user._id,
      balance: 0
    });
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).json({ message: "Signup failed" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UsersModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password not match" });
    }

    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Login failed" });
  }
});


app.get("/allUsers", async(req,res) => {
    let allUsers = await UsersModel.find({});
    res.json(allUsers);
})

app.get("/allHoldings/:userId", async(req,res) => {
    const allHoldings = await HoldingsModel.find({
      userId: req.params.userId
    });
    res.json(allHoldings);
});

app.get("/allOrders/:userId", async(req,res) => {
    const allOrders = await OrdersModel.find({
      userId: req.params.userId
    });
    res.json(allOrders);
})

app.post("/newOrder", async(req, res) => {
    let newOrder = new OrdersModel({
      userId: req.body.userId,
      name: req.body.name,
      symbol: req.body.symbol,
      price: req.body.price,
      qty: req.body.qty,
      mode: req.body.mode,
      total :req.body.total,
    });
    newOrder.save();
    res.send("Order saved");
})

app.post("/executeOrder/:id", async (req, res) => {
  try {
    const order = await OrdersModel.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const { userId, symbol, qty, price, mode, name } = order;

    let holding = await HoldingsModel.findOne({ userId, symbol });

    const funds = await FundsModel.findOne({ userId });
    if (!funds) {
      return res.status(404).json({ message: "Funds not found" });
    }

    if (mode === "BUY") {
      const requiredAmount = qty * price;

      if (funds.balance < requiredAmount) {
        return res.status(400).json({ message: "Insufficient funds" });
      }

      funds.balance -= requiredAmount;
      await funds.save();

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
          net: "0",
          day: "0",
        });
      }
    }

    if (mode === "SELL") {
      if (!holding) {
        return res
          .status(400)
          .json({ message: "Stock not found in holdings" });
      }

      if (qty > holding.qty) {
        return res
          .status(400)
          .json({ message: "Not enough quantity to sell" });
      }

      funds.balance += qty * price;
      await funds.save();

      if (qty === holding.qty) {
        await HoldingsModel.deleteOne({ userId, symbol });
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
});


app.get("/funds/:userId", async (req, res) => {
  try {
    const funds = await FundsModel.findOne({
      userId: req.params.userId
    });

    if (!funds) {
      funds = await FundsModel.create({
        userId: req.params.userId,
        balance: 0
      });
    }

    res.json({
      openingBalance: funds.balance,
      usedMargin: 0,
      availableMargin: funds.balance,
    });
  } catch (err) {
    res.status(500).json({ message: "Funds fetch failed" });
  }
});

app.post("/funds/add/:userId", async (req, res) => {
  try {
    const { amount } = req.body;
    const { userId } = req.params;

    if (amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    let funds = await FundsModel.findOne({ userId });

    if (!funds) {
      funds = await FundsModel.create({
        userId,
        balance: 0,
      });
    }

    funds.balance += Number(amount);
    await funds.save();

    res.json({ message: "Funds added successfully" });
  } catch (err) {
    console.error("ADD FUNDS ERROR:", err);
    res.status(500).json({ message: "Add funds failed" });
  }
});


app.listen(PORT, () => {
    console.log("Listining");
    mongoose.connect(url);
    console.log("Connected"); 
});