const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    blockNumber: {
      type: String
    },
    timeStamp: {
        type: String
      },
      hash: {
        type: String
      },
      nonce: {
        type: String
      },
      blockHash: {
        type: String
      },
  },
  { timestamps: true }
);


const tranModel = mongoose.model("Transactions", transactionSchema);
module.exports = tranModel;

