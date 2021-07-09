const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const request = require("request")
const User = require("../models/user");
const Product = require("../models/product");

const defaultOptions = {
  country: "world"
}

//constructor (options = defaultOptions); {
//  this.options = options;
//  this.URL = `https://${options.country}.openfoodfacts.org`;
//}

//country (country = defaultOptions.country) {
//  return this.setOption("country", country)
//}

//testing, post not public product
module.exports.myConsume_post = async (req, res) => {
  //needs user auth, check if it's public
  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    category: req.body.category,
    consumed: req.body.consumed,
    isPublic: req.body.isPublic,
    owner: req.body.owner,
    createdOn: req.body.createdOn
  });

  try {
    await newProduct.save();
    return res.status(200).send(newProduct);
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}
//testing, gets non public product
//needs to filter by Date, RecentLast.name, tags, brand, category, 
//price, PriceRange, isPublic, notConsumed/consumed
module.exports.myConsume_get = (req, res) => {
  const authHeader = req.get("authorization");
  const token = authHeader;

  if (!authHeader) {
    return res.status(401).send("Header error");
  }

  jwt.verify(token, SECRET, function (err) {
    if (err) {
      return res.status(401).send("User is not authorized");
    }
  });

  const decoded = jwt.verify(token, "your secret or key");
  var userId = decoded.user_data.user_id;
  console.log(userId);

  res.status(200).send(Product);
}
module.exports.publicProduct_post = async (req, res) => {
  //needs user auth, check if it's public
  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    category: req.body.category,
    consumed: req.body.consumed,
    isPublic: req.body.isPublic,
    owner: req.body.owner,
    createdOn: req.body.createdOn
  });

  try {
    if (isPublic = true) {
      await newProduct.save();
      return res.status(200).send(newProduct);
    } else {
      return res.status(500).json({
        message: err.message
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}
//testing, gets a public product
//needs to filter by Date, RecentLast.name, tags, brand, category, 
//price, PriceRange, isPublic, notConsumed/consumed
module.exports.publicProduct_get = (req, res) => {
  try {
    if (category) {
      Product = Product.filter(filteredProduct => {
        return filteredProduct.category;
      });
    }
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}
//testing, updates product info
module.exports.updateProduct = async (req, res) => {
  //needs user auth (middleware?), check if it's public
  try {
    const product = await Product.findById(req.body.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found!"
      });
    }

    const {
      name, category, brand, barcode, quantity, itWasBoughtFrom,
      itWasBoughtOn, expirationDate, nutritionFacts, barcode,
      consumed, consumedOn, notes, tags, isPublic, Owner, cratedOn
    } = req.body;

    if (name) {
      product.name = name;
    }

    if (category) {
      product.category = category;
    }

    if (consumed) {
      product.consumed = consumed;
    }

    const updatedProduct = await user.user();
    res.json(updatedProduct);
    //redirect?
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}
//testing, deletes product
module.exports.deleteProduct = async (req, res) => {
  //needs user auth (middleware?), check if it's public
  try {
    const product = await Product.findById(req.body.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found!"
      });
    }

    await product.remove();
    res.json({
      message: "Product has been deleted!"
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}
