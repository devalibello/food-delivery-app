const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const authMiddleware = (req, res, next) => {
    const { authorization } = rer.headers

    if (!authorization) {
        res.status(401).json({error: 'Authorization Required'})
    }

    const token = authorization.split('')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.body.userId = userModel.findOne({_id}).select('_id')
        next()
    }catch(error) {

    }

}

module.exports = authMiddleware