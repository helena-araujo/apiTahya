require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const db = require("../src/data/database");
db.connect();

app.use(express.json());
app.use(cors());

const index = require("../src/routes/index");
const userRouter = require("./routes/user.routes");
//const productRouter = require("../src/routes/product.routes");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/", userRouter);
//app.use("/products", productsRouter);

module.exports = app;