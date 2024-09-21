const Food = require('../models/foodsModel')
const mongoose = require('mongoose')
const fs = require('fs')


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
    let image_filename = req.file ? `${req.file.filename}` : null

    const { name, description, price, category } = req.body

    try {
        const food = await Food.create({name, description, price, category, image: image_filename})
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

    const food = await Food.findByIdAndDelete(id)
    if (!food) {
        return res.status(404).json({error: 'No such food!'})
    }

    if (food.image) {
        fs.unlink(`uploads/${food.image}`, () => {

        })
    }

    res.status(200).json(food)
}

module.exports = {
    createFood,
    getFoods,
    deleteFood
}