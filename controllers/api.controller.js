const { Countries } = require("../models/api.model");
const { Sequelize } = require("../db");

let getAll = (req, res) => {
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`,
	});
};

let createNew = async (req, res) => {
	console.log(req.body);

	// data mismatch for educational purposes ONLY

	let newCountry = await Countries.create({
		country: req.body.country,
		country_code: req.body.countryCode,
		year: req.body.year,
		population: req.body.population,
		gdp_usd: req.body.gdpUSD,
		inflation: req.body.inflation,
		unemployment: req.body.unemployment,
	});

	res.status(201).json({
		message: `Country created`,
		newCountry,
	});
};

let getByCountry = async (req, res) => {
	let { country } = req.params;
	console.log(country);

	const foundCountry = await Countries.findAll({
		where: Sequelize.where(
			Sequelize.fn("LOWER", Sequelize.col("country")),
			country
		),
	});

	if (!foundCountry.length) {
		res.status(200).json({
			message: `${country} not found`
		})
		return
	}

	res.status(200).json({
		message: foundCountry
	});
};

let updateByID = (req, res) => {
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`,
	});
};

let deleteByID = (req, res) => {
	/* 
		? Challenge
		* try to delete a country using its id
	*/
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`,
	});
};

module.exports = { getAll, createNew, getByCountry, updateByID, deleteByID };
