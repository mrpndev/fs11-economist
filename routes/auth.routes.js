const router = require("express").Router();
const { registerUser, loginUser, resetPassword } = require("../controllers/auth.controller");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.put("/resetpassword", resetPassword)

module.exports = router;
