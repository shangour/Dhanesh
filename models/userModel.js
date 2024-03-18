const mongoose = require("mongoose")

const userModel= new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        required :[true,"username is required"],
        minLength:[3,"username  must be atleast 3 characters"],
        maxLength:[15,"username  max be atleast 15 characters"],
    },
    email:{
        type:String,
        trim:true,
        //unique:true,
        required :[true,"email is required"],
        lowercase:true,
        minLength:[3,"email must be atleast 3 characters"],
       // maxLength:[3,"email  be atleast 15 characters"],
       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
   password:{
        type:String,
        //trim:true,
        //unique:true,
        required :[true,"password is required"],
        minLength:[3,"password  must be atleast 3 characters"],
        maxLength:[15,"password max be atleast 15 characters"],
    },
},
{timestamps:true}
)

const User = mongoose.model("user",userModel);

module.exports = User;