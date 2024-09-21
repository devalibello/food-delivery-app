const Food = require('../models/foodsModel')
const mongoose = require('mongoose')


//GET

const getFoods = async (req, res) => {
    try {
        const foods = await Food.find({}).sort({createdAt: -1})
        res.status(200).json(foods)

    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

//POST

const createFood = async (req, res) => {
    const { name, description, price, category, image } = req.body

    try {
        const food = await Food.create({name, description, price, category, image})
        res.status(200).json(food)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//DELETE

const deleteFood = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such food!'})
    }

    const food = await Food.findByIdAndDelete({_id: id})
    if (!food) {
        return res.status(404).json({error: 'No such food!'})
    }
    
    res.status(200).json(food)
}

module.exports = {
    createFood,
    getFoods,
    deleteFood
}