const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // Null for guest checkout
	products: [
		{
			product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
			quantity: { type: Number, required: true },
			price: { type: Number, required: true },
		},
	],
	totalAmount: { type: Number, required: true },
	status: { type: String, default: "Pending" }, // Pending, Completed, Cancelled
	paymentStatus: { type: String, default: "Unpaid" }, // Paid, Unpaid
	orderDate: { type: Date, default: Date.now },
	delivery: {
		address: { type: String, required: true },
		city: { type: String, required: true },
		postalCode: { type: String, required: true },
		country: { type: String, required: true },
	},
	appliedCoupon: { type: String, default: null }, // Store applied coupon code
});

module.exports = mongoose.model("Order", orderSchema);
