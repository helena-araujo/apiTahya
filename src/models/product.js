const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  brand: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    required: false
  },
  itWasBoughtFrom: {
    type: String,
    required: false
  },
  itWasBoughtOn: {
    type: Date,
    required: false,
  },
  expirationDate: {
    type: Date,
    required: false
  },
  nutritionFacts: {
    type: Object,
    //import from Open Food Facts
    required: false
  },
  barcode: {
    type: Object,
    required: false
  },
  consumed: {
    type: Boolean,
    required: true
  },
  consumedOn: {
    type: Date,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  tags: {
    type: Array,
    required: false
    //import from Open Food Facts?
  },
  isPublic: {
    type: Boolean,
    required: true,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date
  }
}, {
  versionKey: false
});

module.exports = mongoose.model("product", productSchema);