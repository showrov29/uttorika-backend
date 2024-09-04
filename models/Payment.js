const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
	order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
	amount: { type: Number, required: true },
	currency: { type: String, required: true },
	method: { type: String, required: true }, // e.g., "bKash", "Nogod", "SSLCommerz"
	transactionId: { type: String, required: true },
	paymentDate: { type: Date, default: Date.now },
	status: { type: String, default: "Pending" }, // Pending, Completed, Failed
});

module.exports = mongoose.model("Payment", paymentSchema);
