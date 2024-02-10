
import dotenv from 'dotenv';
import categoryCreated from './routes/category.js';
import itemCreated from './routes/itemCreation.js';
import itemSearched from './routes/itemSearch.js';
import categorySearched from './routes/itemSearch.js';
import allItemSearched from './routes/fetchAll.js';

	
dotenv.config({
    path: '../env'
})

import express, { Router } from 'express';
const app = express();
import connectDB from './config/db.js';
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



app.use("/createCategory",categoryCreated);
app.use("/createItems",itemCreated);
app.use("/searchItem",itemSearched);
app.use("/searchCategory",categorySearched);
app.use("/searchAllItem",allItemSearched);



app.listen(PORT,()=>{
    console.log("App is listening on the port: ",PORT);
})







