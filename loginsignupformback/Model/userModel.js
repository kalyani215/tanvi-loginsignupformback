const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: { 
        type:String,
        
    },
    email:{
        type:String,
        index:{
            unique:true
        }
        
    },
    date:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }
})




const userDetail = new mongoose.model('userDetails', userSchema)

module.exports = userDetail;