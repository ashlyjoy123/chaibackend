import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED!!!",err)
})










/*
import express from "express"

const app=express()

async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`);
    app.on("error",(error)=>{
        console.log("error:",error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port${process.env.PORT}`);
    })
  } catch (error) {
    console.error("error:", error);
    throw err;
  }
};*/
