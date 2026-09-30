// import your user model
const { User } = require("../models/auth.model")

let registerUser = async (req, res) => {
	console.log(req.body);

	// call create on your User schema and pass the data
	let newUser = await User.create(req.body)
	console.log(newUser)

	res.status(201).json({
		message: `User created`,
		newUser
	});
};

let loginUser = async (req, res) => {
	// console.log(req.body)
	const { email, password } = req.body

	// findOne accepts query object where we match email from db to email from req
	// let foundUser = await User.findOne({ where: { email: req.body.email }})

	let foundUser = await User.findOne({ where: { email }})

	if (!foundUser) {
		res.status(403).json({
			message: "Invalid username or password"
		})
	
		return
	}
	
	console.log(foundUser.dataValues.password)
	// example of object destructuring and giving it an alias
	let { dataValues: user } = foundUser

	if (user.password !== password) {
		res.status(403).json({
			message: "Invalid username or password"
		})
	
		return
	}

	res.status(200).json({
		message: `${user.email} logged in`,
	});
};

module.exports = { registerUser, loginUser }