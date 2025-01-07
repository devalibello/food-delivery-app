const orderModel = require('../models/orderModel')
const Order = require('../models/orderModel')
const User = require('../models/userModel')
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order
const placeOrder = async (req, res) => {
const frontend_url = "http://localhost:5174"

    try {
        const newOrder = new Order({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })

        await newOrder.save()
        await User.findByIdAndUpdate(req.body.userId, {cartData: {}})

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: 'ngn',
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100* 1650
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: "ngn",
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: 2 * 100 * 1600
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        
        res.json({success: true, success_url: session.url})

    } catch (error) {
        res.json({success: false, mssg: "Error"})
    }

}

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body
    try {
        if (success == 'true') {
            await orderModel.findByIdAndUpdate(orderId, {payment: true})
            res.status(200).json({mssg: "Payment Successful"})
        }
        else {
            await orderModel.findByIdAndDelete(orderId)
            res.status(400).json({mssg: "Payment Failed"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({mssg: error.message})
    }
}

module.exports = { placeOrder, verifyOrder }