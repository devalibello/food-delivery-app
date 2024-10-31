const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        res.status(401).json({error: 'Authorization Required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({_id})
        req.body.userId = user._id
        next()
    }catch(error) {
        res.status(400).json({error: 'Unauthorized Access'})
    }

}

module.exports = authMiddleware