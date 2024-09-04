const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
	res.send("products ");
});
router.get("/get:id", (req, res) => {
	res.send("products Route");
});
router.delete("/delete", (req, res) => {
	res.send("products Route");
});
router.put("/update", (req, res) => {
	res.send("products Route");
});
router.get("/list", (req, res) => {
	res.send("products Route");
});

module.exports = router;
