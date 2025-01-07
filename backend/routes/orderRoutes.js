const express = require('express')
const { placeOrder, verifyOrder } = require('../controllers/orderController')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.post('/placeorder', authMiddleware, placeOrder)
router.post('/verify', verifyOrder)

module.exports = router

