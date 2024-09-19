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

//POST
router.post('/', async (req,res) => {
    const { name, description, price, category } = req.body

    try {
        const food = await Food.create({name, description, price, category})
        res.status(200).json(food)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'POST Request'})
})

//DELETE
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE Request'})
})

//PATCH
router.patch('/:id', (req,res) => {
    res.json({mssg: 'PATCH request'})
})


module.exports = router