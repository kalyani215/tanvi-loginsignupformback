var app = require('express');
var router = app.Router();
var userModel = require('../Model/userModel')
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');

router.post('/signUp', (req, res) => {
    console.log(req.body)
    // var data = req.body
    var password = req.body.password
    var confirmPassword = req.body.confirmPassword
    if(password !== confirmPassword){
        res.json({
            message:"Password Not Matched!"
        })
    }else{
        

        // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash)
        bcrypt.hash(req.body.password, 10,(err, hash) =>{
            console.log(hash);
            if(err){
                res.json({
                    message:"Something Went Wrong, Try Again",
                    error:err
                })
            }else{
                var UserDetails = new userModel({
                    username: req.body.username,
                    email:req.body.email,
                    date:req.body.date,
                    mobileNo:req.body.mobileNo,
                    password: hash,
                })
              
                UserDetails.save(function (err, response) {
                    if (err) {
                        res.status(400).send({ status: false, msg: "Something Went Wrong", data: err })
                    } else {
                        res.status(200).send({ status: true, msg: "Data Saved Successfully", data: response })
                    }
                }) 
            }
        });
        
      
    }

})


module.exports = router;