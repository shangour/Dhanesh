require("dotenv").config({path:"./.env"})
const express = require("express");
const app = express();

//mon
require("./models/db").dbconnection();

app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on port ${process.env.PORT}`)
})