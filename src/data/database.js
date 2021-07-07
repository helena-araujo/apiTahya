require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    (console.log("Connected to MongoDB!"));
  } catch (err) {
    console.log(err);
  }
}



module.exports = { connect }