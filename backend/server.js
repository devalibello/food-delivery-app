require("dotenv").config();

const express = require("express");

//express app
const app = express();

//Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Listening to requests on port ${process.env.PORT}`);
});
