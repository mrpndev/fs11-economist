let customHeaders = (req, res, next) => {
	res.setHeader("X-Powered-By", ".NET")
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000")

	next()
}

module.exports = customHeaders