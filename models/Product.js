const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	stock: { type: Number, required: true },
	category: { type: String },
	description: { type: String },
	images: [String], // Store image URLs
});

module.exports = mongoose.model("Product", productSchema);
