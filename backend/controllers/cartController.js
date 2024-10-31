const User  = require('../models/userModel')

const addToCart = async (req, res) => {
    try {
        let userData = await User.findById(req.body.userId);
        let cartData = userData.cartData
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }
        await User.findByIdAndUpdate(req.body.userId, {cartData})
        res.status(200).json({mssg: 'Added Item'})
    } catch (error) {
        res.status(401).json({error: 'Error Adding Item'})
    }
}

const removeFromCart = async (req, res) => {
    try {
        let userData = await User.findById(req.body.userId)
        let cartData = userData.cartData
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1
            await User.findByIdAndUpdate(req.body.userId, {cartData})
            res.status(200).json({mssg: 'Item Removed'})

        } else {
            res.status(401).json({error: 'No Such Item'})
        }
    } catch (error) {
        res.status(401).json({error: 'Error Deleting Item'})
    }
}


const getCart = async (req, res) => {
    try {
        let userData = await User.findById(req.body.userId)
        let cartData = userData.cartData
        res.status(200).json({cartData})
    } catch (error) {
        res.status(401).json({error: 'Error fetching Cart'})
    }
}


module.exports = { addToCart, removeFromCart, getCart }