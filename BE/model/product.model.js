const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    description: [{ type: String, required: true }],
    images: [{ type: String, required: true }],
    videos: [{ type: String, required: true }],
    discountedPrice: { type: Number, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: false
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product