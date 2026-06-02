import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export async function connectToDB() {
  if (!MONGO_URI) {
    throw new Error(
      "MONGO_URI est manquante. Définissez-la dans .env.local"
    );
  }

  if (mongoose.connection.readyState) {
    console.log("Using existing connection", mongoose.connection.name);
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB", mongoose.connection.name);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
}