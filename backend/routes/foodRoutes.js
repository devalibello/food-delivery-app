const express = require('express')

const router = express.Router()


//GET Request
router.get('/', (req,res) => {
    res.json({mssg: 'GET request'})
})

//GET Single Request
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET single food'})
})

//POST
router.post('/', (req,res) => {
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