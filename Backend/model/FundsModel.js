const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FundsSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Funds", FundsSchema);
