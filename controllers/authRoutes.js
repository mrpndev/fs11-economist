const router = require("express").Router();

router.post("/register", (req, res) => {
	console.log(req.body);

	res.status(201).json({
		message: `${req.method} ${req.originalUrl} route`,
	});
});

router.post("/login", (req, res) => {
	let keys = Object.keys(req.body);
	console.log(keys);
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`,
	});
});

module.exports = router;
