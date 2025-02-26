import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function getStudent() {
  configDotenv();
  const uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = await client.db("food-delivery");
    const collection = database.collection("foods");

    const students = collection.find().toArray();
    return students;
  } catch (error) {
    console.log("Error", error);
  }
}
