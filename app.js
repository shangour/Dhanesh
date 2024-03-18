require("dotenv").config({path:"./.env"})
const express = require("express");
const app = express();

//mongo  db connection
require("./models/db").dbconnection();

//
const userRouter = require("./routes/userRoute")

// logger
const logger = require("morgan");
app.use(logger("tiny"))

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//app.use
app.use("/api/user",userRouter);

//unknown routes
app.all("*",(req,res,next)=>{
    res.status(404).json({
        success:false,
        message:`${req.url} route not found`,
    })
})


app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on port ${process.env.PORT}`)
})