const router = require("express").Router();

let db = [];

router.post("/new", (req, res) => {
	db.push(req.body);
	res.status(201).json({
		message: `${req.method} ${req.originalUrl} route`,
		db,
	});
});

router.get("/all", (req, res) => {
	res.send(JSON.stringify("testresponse"))
});

module.exports = router;
