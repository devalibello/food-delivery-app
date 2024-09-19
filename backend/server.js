require("dotenv").config();

const express = require("express");
const foodRouter = require("./routes/foodRoutes")

//express app
const app = express()


//routes middleware
// app.use('/api/foods', foodRouter)

//Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Listening to requests on port ${process.env.PORT}`);
});
