const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const isEmail = require("email-validator");
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports.signUpAccount_post = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashPassword;

  isEmail.validate(req.body.email);

  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cratedOn: req.body.cratedOn
  });

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(409).json({
      error: "This email is already in use!"
    });
  }

  try {
    await newUser.save();
    return res.status(200).send(newUser);
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}

module.exports.signInAccount_post = (req, res) => {
  //needs rewrite
  const {
    email,
    password
  } = req.body;

  User.findOne({ email: email }, function (err, user) {
    if (err) {
      return res.status(404).send(`Could not find any user by the email ${email}`)
    }

    const passwordToValidate = bcrypt.compareSync(password, user.password);

    if (!passwordToValidate) {
      return res.status(403).send("Wrong password!");
    }

    const token = jwt.sign({ email: email }, SECRET);
    return res.status(200).send(token);
  });
}
//testing
module.exports.myAccount_get = (req, res) => {
  //needs rewrite
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
  res.status(200).send("Hi!")
  //const decoded = jwt.verify(token, SECRET);
  //var userId = decoded.user_data.user_id
  //console.log(userId)
}
//testing, updates account
module.exports.myAccount_put = async (req, res) => {
  //needs user auth
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found!"
      });
    }

    const {
      name, email, country, birthday, gender, weight, height, allergiesIntolerancesDiseases,
      diet, objective, systemOfMeasurement, objectiveQuantity, exerciseFrequency
    } = req.body;

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if(country) {
      user.country = country;
    }

    if (birthday) {
      user.birthday = birthday;
    }

    if (gender) {
      user.gender = gender;
    }

    if (weight) {
      user.weight = weight;
    }

    if (height) {
      user.height = height;
    }

    if (allergiesIntolerancesDiseases) {
      user.allergiesIntolerancesDiseases = allergiesIntolerancesDiseases;
    }

    if (diet) {
      user.diet = diet;
    }

    if (objective) {
      user.objective = objective;
    }

    if (systemOfMeasurement) {
      user.systemOfMeasurement = systemOfMeasurement;
    }

    if (objectiveQuantity) {
      user.objectiveQuantity = objectiveQuantity;
    }

    if (exerciseFrequency) {
      user.exerciseFrequency = exerciseFrequency;
    }

    const updatedAccount = await user.user();
    res.json(updatedAccount);
    //redirect?
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}
//testing, updates account password
module.exports.accountPassword_patch = async (req, res) => {
  //needs user auth
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found!"
      });
    }

    const { password } = req.body;

    if (password) {
      user.password = password;
    }
    res.status(200).send("Password updated!")
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}
//testing, deletes account
module.exports.deleteAccount = async (req, res) => {
  //needs user auth
  try {
    const user = await User.findById(req.body.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found!"
      });
    }

    await user.remove();
    res.json({
      message: "User has been deleted!"
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}
