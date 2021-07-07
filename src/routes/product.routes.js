const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

router.post("/myConsume", controller.myConsume_post);
router.get("/myConsume", controller.myConsume_get);

router.post("/public", controller.publicProduct_post);
router.get("/public", controller.publicProduct_get);

router.patch("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;