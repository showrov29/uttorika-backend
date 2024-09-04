const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
	res.send("payment ");
});
router.get("/get:id", (req, res) => {
	res.send("payment Route");
});
router.get("/list", (req, res) => {
	res.send("payment Route");
});

module.exports = router;
