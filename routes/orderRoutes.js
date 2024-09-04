const express = require("express");
const { createOrder } = require("../controllers/orderController");
const router = express.Router();

router.post("/create", createOrder);
router.get("/get:id", (req, res) => {
	res.send("order Route");
});
router.delete("/delete", (req, res) => {
	res.send("order Route");
});
router.put("/update", (req, res) => {
	res.send("order Route");
});
router.get("/list", (req, res) => {
	res.send("order Route");
});

module.exports = router;
