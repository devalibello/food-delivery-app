require("dotenv").config();

const express = require("express")
const foodRouter = require('./routes/foodRoutes')

//express app
const app = express()

//parse incoming request into req handler in JSON format when the req has a body.
//This is used for POST or PATCH requests
app.use(express.json())


//routes middleware
app.use('/api/foods', foodRouter)

//Listen for requests
app.listen(process.env.PORT, () => {
console.log(`Listening to requests on port ${process.env.PORT}`);
});
