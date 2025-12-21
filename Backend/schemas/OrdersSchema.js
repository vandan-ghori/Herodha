const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrdersSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    name: String,
    symbol: String,
    price: Number,
    qty: Number,
    mode: String,
    total: Number,
});

module.exports = {OrdersSchema};