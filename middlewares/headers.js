let customHeaders = (req, res, next) => {
	res.setHeader("X-Powered-By", ".NET")
	res.setHeader("Access-Control-Allow-Origin", "*")

	next()
}

module.exports = customHeaders