const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    }
}, {minimize: false})


//static signup method

userSchema.statics.signup = async function(name, email, password){

    const exists = await this.findOne({email})

    if(exists) {
        throw Error('Email Aleady Exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password: hash})
    return user
}

module.exports = mongoose.model('User', userSchema)