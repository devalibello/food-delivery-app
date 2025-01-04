const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

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

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)) {
        throw Error('Not a valid email')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.')
    }

    const exists = await this.findOne({email})

    if(exists) {
        throw Error('Email Aleady Exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password: hash})
    return user
}

//static login method

userSchema.statics.login = async function(email, password) {

    if(!email || !password) {
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({email})

    if(!user) {
        throw Error("Invalid email credential")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error("Invalid password credential")
    }

    return user
}

module.exports = mongoose.model('User', userSchema)