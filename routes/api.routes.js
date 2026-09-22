const router = require("express").Router();
const {
	getAll,
	createNew,
	getByCountry,
	updateByID,
	deleteByID,
} = require("../controllers/api.controller");

router.get("/all", getAll);

router.post("/new", createNew);

router.get("/:country", getByCountry);

router.put("/:id", updateByID);

router.delete("/:id", deleteByID);

module.exports = router;
