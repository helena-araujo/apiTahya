const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.post("/signup", controller.signUpAccount_post);
//router.get("/signup", controller.signUpAccount_get);

router.post("/signin", controller.signInAccount_post);
//router.get("/signin", controller.signInAccount_get);

//router.post("/signout", controller.signOutAccount_post);
//router.get("/signout", controller.signOutAccount_get);

router.get("/myaccount", controller.myAccount_get);
router.put("/myaccount", controller.myAccount_put);

router.patch("/signinoptions/password", controller.accountPassword_patch);

router.delete("/deleteaccount", controller.deleteAccount);

module.exports = router;