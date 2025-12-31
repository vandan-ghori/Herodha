require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const dataRoute = require("./routes/dataRoute");
const orderRoute = require("./routes/orderRoute");
const pricesRoute = require("./routes/prices");

const PORT = process.env.PORT || 2020;
const url = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:5174"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/", authRoute); 
app.use("/", dataRoute); 
app.use("/", orderRoute); 
app.use("/api", pricesRoute); 
app.use("/api", require("./routes/indices")); 

console.log("Connecting to:", url);
mongoose
  .connect(url)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

