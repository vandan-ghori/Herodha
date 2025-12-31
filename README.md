# 📈 Herodha – Zerodha Clone (MERN Stack)

Herodha is a **full-stack stock trading simulation platform** inspired by Zerodha.  
It displays **real-time NIFTY 50 stock data**, allows users to **buy/sell stocks**, manages **live portfolios**, and tracks **profit & loss** — all built using the **MERN stack**.

> ⚠️ This project is for **educational purposes only** and does not involve real money.

---

## 🌟 Key Features

### 🔐 User Authentication & Authorization
- Secure **Signup / Login**
- JWT-based authentication
- Protected APIs and routes

---

### 📊 Live Stock Market Tracking
- Real-time **NIFTY 50 stock prices**
- Auto refresh every **10 seconds**
- Stock updates work **only during Indian market hours**
  - 🕘 **9:15 AM – 3:30 PM (IST)**

---

### 💹 Trading Features
- 🟢 Buy stocks
- 🔴 Sell stocks
- 💰 Balance validation before order placement
- ⚡ Instant order execution logic

---

### 💼 Portfolio & Holdings
- Live holdings view
- 📈 Real-time **Profit & Loss (P&L)** tracking
- Portfolio refresh every **10–30 seconds**
- Individual stock performance tracking

---

### 📈 Charts & Visualization
- 📊 Live holding charts using **Chart.js**
- Real-time price movement visualization
- Clean and responsive UI

---

### 💳 Funds Management
- ➕ Add virtual funds
- ➖ Use funds for trading
- 💼 Wallet balance updates in real time

---

### ⏰ Market Time Logic
- Tracks stocks **only when Indian market is open**
- Stops live updates automatically after market close

---

## 🧱 Tech Stack

### 🖥️ Frontend
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 📊 Chart.js
- 🔄 Axios

### 🛠️ Backend
- 🟢 Node.js
- 🚀 Express.js
- 🧱 MVC Architecture

### 🗄️ Database
- 🍃 MongoDB
- 🧩 Mongoose

### 🔐 Security
- JWT Authentication
- Password hashing with bcrypt

---

## 🔄 Live Data Handling
- Stock data fetched at fixed intervals
- Optimized polling to reduce server load
- Timers synced between frontend & backend

---

## 🧪 Core Functionalities Implemented
- ✅ Full CRUD operations
- ✅ REST APIs
- ✅ MVC backend architecture
- ✅ Error handling & validation
- ✅ Responsive UI
- ✅ Secure authentication flow
