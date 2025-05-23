require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const foodRouter = require('./routes/foodRoutes')
const userRouter = require('./routes/userRoutes')
const cartRouter = require('./routes/cartRoutes')
const orderRouter = require('./routes/orderRoutes')

//express app
const app = express()

//allow access to backend from multiple sources
app.use(cors())

//parse incoming request into req handler in JSON format when the req has a body.
//This is used for POST or PATCH requests
app.use(express.json())


//routes middleware
app.use('/api/foods', foodRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

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

