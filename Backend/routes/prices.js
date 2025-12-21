const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/prices", async (req, res) => {
  try {
    const { symbols } = req.body;
    if (!symbols || !Array.isArray(symbols)) {
      return res.status(400).json({ error: "symbols must be an array" });
    }

    const prices = [];

    for (const symbol of symbols) {
      try {
        if (!symbol || typeof symbol !== "string") {
          prices.push({ symbol, price: 0 });
          continue;
        }

        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
        const response = await axios.get(url, { timeout: 8000 });

        const result = response?.data?.chart?.result;

        if (!result || !result[0]) {
          prices.push({ symbol, price: 0 });
          continue;
        }

        const price = result[0]?.meta?.regularMarketPrice ?? 0;

        prices.push({ symbol, price });
      } catch (err) {
        console.error();
      }
    }

    res.json(prices);
  } catch (error) {
    console.error("PRICE ROUTE FATAL ERROR:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
