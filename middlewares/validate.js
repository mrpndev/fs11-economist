/* 
	? Protected Routes
	* routes requiring authorization or authentication to access
	* done using session or token
	* we will use JSONWebToken to accomplish this
*/
const jwt = require("jsonwebtoken")
const JWT_KEY = process.env.JWT_KEY

let validateSession = (req, res, next) => {
	// ? prefilght request - checks what's allowed by the server
	if (req.method === "OPTIONS") {
		next()
	}

	// ? check if token exists
	// ? token passed in headers, may have Bearer prefix
	if (!req.headers.authorization) {
		return res.status(403).json({
			message: "Forbidden"
		})
	}

	// ? handle the auth header as Bearer or naked token
	let authToken = req.headers.authorization.includes("Bearer")
		? req.headers.authorization.split(" ")[1]
		: req.headers.authorization

	// ? jwt verifies if token generated using our key
	let payload = jwt.verify(authToken, JWT_KEY, (err, payload) => {
		if (err) {
			console.error(err)
			return res.status(403).json({
				message: "Forbidden"
			})
		}

		req.user = payload

		next()
	})

}

module.exports = validateSession
