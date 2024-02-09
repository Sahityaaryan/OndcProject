
require('dotenv').config();

import express from 'express';
const app = express();
import connectDB from './config/db';
const PORT = process.env.PORT;


app.use(express.json({limit: '16kb'}));


// % 
app.use(express.urlencoded({extended: true ,  limit: '16kb'}));



connectDB()
.then((res)=>{
    console.log("connected to the server");
})
.catch((err)=>{
    console.log(err);
})







app.listen(PORT,()=>{
    console.log("App is listening on the port: ",PORT);
})







