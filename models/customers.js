const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },
    
    totalCredit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Customer", customerSchema);
