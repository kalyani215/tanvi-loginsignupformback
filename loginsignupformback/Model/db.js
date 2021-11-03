const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/ProductDatabase",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database connected");
    }
});


module.export = mongoose