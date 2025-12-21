const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/indices", async (req, res) => {
  try {
    const indices = {
      nifty: "%5ENSEI",
      sensex: "%5EBSESN",
    };

    const result = {};

    for (const key in indices) {
      const url = `https://query1.finance.yahoo.com/v8/finance/chart/${indices[key]}`;

      const response = await axios.get(url);

      const meta = response.data.chart.result[0].meta;

      result[key] = {
        price: meta.regularMarketPrice,
        prevClose: meta.previousClose,
        change: meta.regularMarketPrice - meta.previousClose,
        percent:
          ((meta.regularMarketPrice - meta.previousClose) /
            meta.previousClose) *
          100,
      };
    }

    res.json(result);
  } catch (err) {
    console.error("INDEX API ERROR:", err.message);
    res.status(500).json({ message: "Index fetch failed" });
  }
});

module.exports = router;
