const User = require("../models/User");

exports.isAdmin = async (req, res, next) => {
	const userId = req.userId; // Assuming JWT or session contains user ID
	const user = await User.findById(userId);

	if (user && user.role === "admin") {
		// Assuming user has a role field
		next();
	} else {
		res.status(403).json({ message: "Unauthorized" });
	}
};
