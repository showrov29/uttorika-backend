const Product = require("../models/Product");

// Create a new product
createProduct = async (req, res) => {
	const { name, description, price, category, stock, images } = req.body;

	try {
		const product = new Product({
			name,
			description,
			price,
			category,
			stock,
			images,
		});

		await product.save();
		res.status(201).json({ message: "Product created successfully", product });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating product", error });
	}
};

module.exports = { createProduct };
