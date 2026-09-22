let getAll = (req, res) => {
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`
	});
};

let createNew = (req, res) => {
	res.status(201).json({
		message: `${req.method} ${req.originalUrl} route`
	});
};

let getByCountry = (req, res) => {
	console.log(req.params);
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`
	});
};

let updateByID = (req, res) => {
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`
	});
};

let deleteByID = (req, res) => {
	res.status(200).json({
		message: `${req.method} ${req.originalUrl} route`
	});
};

module.exports = { getAll, createNew, getByCountry, updateByID, deleteByID }
