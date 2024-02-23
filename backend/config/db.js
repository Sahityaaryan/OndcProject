import dotenv from 'dotenv';

import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";// 
const DB_NAME="ONDCdata";
	
dotenv.config({
    path: '../env'
})

// console.log(DB_NAME);


async function connectDB(){

    // console.log("Connecting: ",process.env.MONGODB_URI)

    try {
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        if(connectionInstance)
        {
            console.log(`\n connected to database`)
        }

		
	} catch (error) {
		console.log("Error(while connecting to db): ", error);

        process.exit(1);
	}   

}




export default connectDB;