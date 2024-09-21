const Food = require('../models/foodsModel')


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

const deleteFood = (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.valid)
        
    const food = Food.findByIdAndDelete(id)
}


module.exports = {
    createFood,
    getFoods
}