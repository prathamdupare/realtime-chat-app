import { clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const connection = {};

const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Already connected");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
