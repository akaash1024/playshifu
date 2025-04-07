const { model } = require("mongoose");
const Product = require("../model/product.model")



const addProduct = async (req, res, next) => {
    const {  name, rating, description, images,videos,discountedPrice,price } = req.body;

    try {
        let product = await Product.create({ name, rating, description, images,videos,discountedPrice,price })
        res.status(201).json({ success: true, message: "Product added successfully", product });

    } catch (error) {
        next(error)
    }
}


const getProducts = async (req, res, next) => {
    try {
        let productList = await Product.find()
        res.status(200).json({ success: true, message: "Product fetched successfully", productList });
    } catch (error) {
        next(error)
    }
}

module.exports = { addProduct, getProducts }