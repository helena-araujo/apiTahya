const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  country: {
    type: String,
    required: true,
    default: "world"
  },
  password: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  height: {
    type: Number,
    required: false
  },
  allergiesIntolerancesDiseases: {
    type: Array,
    required: false,
    default: undefined
  },
  diet: {
    type: String,
    required: false
  },
  objective: {
    type: String,
    required: false
  },
  systemOfMeasurement: {
    type: String,
    required: false
  },
  objectiveQuantity: {
    type: Number,
    required: false
  },
  exerciseFrequency: {
    type: String,
    required: false
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date
  }
}, {
  versionKey: false
});

const user = mongoose.model("user", userSchema);

module.exports = user;