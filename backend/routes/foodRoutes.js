const express = require('express')

const router = express.Router()
const Food = require('../models/foodsModel')



//GET Request
router.get('/', (req,res) => {
    res.json({mssg: 'GET request'})
})

//GET Single Request
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET single food'})
})

//POST request
router.post('/', async (req,res) => {
    const { name, description, price, category, image } = req.body

    try {
        const food = await Food.create({name, description, price, category, image})
        res.status(200).json(food)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE request
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE Request'})
})

//PATCH request
router.patch('/:id', (req,res) => {
    res.json({mssg: 'PATCH request'})
})


module.exports = router