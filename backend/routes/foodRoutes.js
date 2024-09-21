const express = require('express')
const multer  = require('multer')

const { createFood, getFoods, deleteFood } = require('../controllers/foodController')

const router = express.Router()



//GET Request
router.get('/', getFoods)

//GET Single Request
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET single food'})
})

//POST request

// Image storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads')
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

//Add middleware to POST action
router.post('/', upload.single('image'), createFood)


//DELETE request
router.delete('/:id', deleteFood)

//PATCH request
router.patch('/:id', (req,res) => {
    res.json({mssg: 'PATCH request'})
})


module.exports = router