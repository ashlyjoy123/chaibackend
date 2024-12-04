import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    //  moongoose returns connection instance
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongodb connected!! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error", error);
    process.exit(1);
  }
};

export default connectDB;
