const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    lowStockAlert: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
