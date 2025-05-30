const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { configVars } = require("./config");
const PORT = configVars.port || 3000;
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/payments", require("./routes/paymentRoutes"));
mongoose
	.connect(configVars.mogoURL)
	.then((res) => {
		console.log("Connected to the database!");
	})
	.catch((err) => {
		console.error(err);
	});
app.listen(PORT, function () {
	console.log("Server is running on Port:", PORT);
});
app.get("/", function (req, res) {
	res.send("Hello World!");
});
