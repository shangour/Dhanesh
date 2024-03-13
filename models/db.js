const mongoose = require('mongoose')

exports.dbconnection = async ()=>{
    try{   
        mongoose.connect(process.env.MONGO_URL);
        console.log("connected mongoose")
    }
    catch(error){
        console.log(error.message)
    }
}
