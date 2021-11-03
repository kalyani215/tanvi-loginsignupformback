const express = require('express');
const cors = require('cors')
const mongoose = require('./Model/db');
const bodyParser = require('body-parser')




const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())




var userRouter = require('./Routes/user')
app.use('/user',userRouter)




app.listen(4500,()=>{
    console.log('Server is Started Successfully..');
})