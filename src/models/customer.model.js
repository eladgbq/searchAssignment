const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let customer = new Schema(
  {
    createdAt: {
      type: Number
    },
    customerId: {
      type: String
    },
    InvoiceId: {
      type: String
    }
  },
  { collection: "Customers" }
);

module.exports = mongoose.model("customers", customer);