const express = require('express')
const placeOrder = require('../controllers/orderController')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.post('/order', authMiddleware, placeOrder)

module.exports = router

