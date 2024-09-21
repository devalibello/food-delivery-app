require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")
const foodRouter = require('./routes/foodRoutes')

//express app
const app = express()

//parse incoming request into req handler in JSON format when the req has a body.
//This is used for POST or PATCH requests
app.use(express.json())


//routes middleware
app.use('/api/foods', foodRouter)

//middleware for accessing images from frontend
app.use('/images', express.static('uploads'))

//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    //Listen for requests
    app.listen(process.env.PORT, () => {
    console.log(`Connected to db & Listening on port ${process.env.PORT}`);
    });

}).catch((error) => {
    console.log(error)
})
