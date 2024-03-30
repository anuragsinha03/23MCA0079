import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();



mongoose.connect(process.env.MONGOURL).then(() =>{
    console.log("DB connected")
}).catch(err =>{
    console.log(err)
})

app.listen(process.env.PORT,  () =>{
    console.log(`Server running on PORT ${process.env.PORT}`)
})