const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	points: { type: Number, default: 0 },
	role: { type: String, required: true, default: "customer" },
	orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("User", userSchema);
