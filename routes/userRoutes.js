const express = require("express");
const router = express.Router();
router.post("/signup", (req, res) => {
	res.send("User signed up");
});
router.post("/signin", (req, res) => {
	res.send("User signed in");
});
router.post("/delete", (req, res) => {
	res.send("User Route");
});
router.put("/update", (req, res) => {
	res.send("User Route");
});
router.get("/list", (req, res) => {
	res.send("User Route");
});

module.exports = router;
