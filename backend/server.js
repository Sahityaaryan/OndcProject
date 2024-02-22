
import dotenv from 'dotenv';
import categoryCreated from './routes/category.js';
<<<<<<< HEAD
import itemCreated from './routes/itemCreation.js';
import itemSearched from './routes/itemSearch.js';
import categorySearched from './routes/categoryFinder.js';
import allItemSearched from './routes/fetchAll.js';
=======
import productCreated from './routes/itemCreation.js';
import fetchAllProducts from './routes/fetchAllProducts.js';
import fetchAllCategories from './routes/fetchAllCategories.js';
>>>>>>> 6fba1fb (added the categories fetch and fixed the carausel)

	
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



app.use("/user/createCategory",categoryCreated);
app.use("/user/createProduct",productCreated);
app.use("/user/fetchAllCategories",fetchAllCategories);
app.use("/user/fetchAllProducts",fetchAllProducts); 





app.listen(PORT,()=>{
    console.log("App is listening on the port: ",PORT);
})







