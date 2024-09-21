const express = require('express')
const { createFood, getFoods, deleteFood } = require('../controllers/foodController')

const router = express.Router()



//GET Request
router.get('/', getFoods)

//GET Single Request
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET single food'})
})

//POST request
router.post('/', createFood)


//DELETE request
router.delete('/:id', deleteFood)

//PATCH request
router.patch('/:id', (req,res) => {
    res.json({mssg: 'PATCH request'})
})


module.exports = router