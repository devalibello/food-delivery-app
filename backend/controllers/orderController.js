const Order = require('../models/orderModel')
const User = require('../models/userModel')
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order
const placeOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            userId: req.body.userId
        })
    } catch (error) {
        
    }

}

module.exports = placeOrder