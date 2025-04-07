const productController = require("../controllers/product.controller")


const productRoute = require("express").Router()

productRoute.route("/add").post(productController.addProduct)
productRoute.route("/").get(productController.getProducts)


module.exports = productRoute