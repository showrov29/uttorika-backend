const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
	code: { type: String, required: true, unique: true }, // Unique coupon code
	discount: { type: Number, required: true }, // Discount amount or percentage
	isPercentage: { type: Boolean, required: true }, // True if discount is a percentage, false if amount
	minPurchaseAmount: { type: Number, default: 0 }, // Minimum amount required to use the coupon
	startDate: { type: Date, required: true }, // Start date of coupon validity
	endDate: { type: Date, required: true }, // End date of coupon validity
	usageLimit: { type: Number, default: 1 }, // Number of times the coupon can be used
	usageCount: { type: Number, default: 0 }, // Number of times the coupon has been used
	applicableCategories: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Category" },
	], // List of categories the coupon applies to
	applicableProducts: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Product" },
	], // List of specific products the coupon applies to
});

module.exports = mongoose.model("Coupon", couponSchema);
