const Order = require("../models/Order");
const Product = require("../models/Product");

// Create a new order after successful payment
createOrder = async (req, res) => {
	const { user, products, delivery, paymentID } = req.body;

	try {
		let totalAmount = 0;

		// Validate products and calculate total amount
		const orderProducts = await Promise.all(
			products.map(async (item) => {
				try {
					const product = await Product.findById(item.product);
					if (!product) {
						console.log("Product not found:", item.product);
						return { error: "Product not found" };
					}

					if (product.stock === undefined || product.stock < item.quantity) {
						console.log("Insufficient stock for product:", product);
						return { error: `Insufficient stock for ${product.name}` };
					}

					totalAmount += item.quantity * product.price;

					return {
						product: product._id,
						quantity: item.quantity,
						price: product.price,
					};
				} catch (err) {
					console.error("Error processing product:", err);
					return { error: err.message };
				}
			})
		);

		// Check for errors in the orderProducts array
		const error = orderProducts.find((item) => item.error);
		if (error) {
			return res.status(400).json({ message: error.error });
		}

		// Reduce stock after payment is successful
		await Promise.all(
			orderProducts.map(async (item) => {
				const product = await Product.findById(item.product);
				if (product) {
					product.stock -= item.quantity;
					await product.save();
				}
			})
		);

		// Create the order
		const order = new Order({
			user: user ? user._id : null,
			products: orderProducts,
			totalAmount,
			paymentStatus: "Paid",
			orderStatus: "Processing",
			delivery,
			paymentID,
		});

		await order.save();

		// Send response
		res.status(201).json({ message: "Order created successfully", order });
	} catch (error) {
		console.error("Error creating order:", error);
		res.status(500).json({ message: "Error creating order", error });
	}
};
module.exports = { createOrder };
