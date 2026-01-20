const express = require('express');
const router = express.Router();

const {signUp, login} = require("../controllers/authController");
const {auth , isStaff , isOwner}  = require("../middlewares/authmiddleware");

router.post('/register', signUp);
router.post('/login', login);


module.exports = router;


