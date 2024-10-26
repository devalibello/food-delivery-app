const express = require('express')
router = express.Router()

const { userLogin, userSignUp } = require('../controllers/userController')

//Login
router.post('/login', userLogin)

//signup
router.post('/signup', userSignUp)

module.exports = router