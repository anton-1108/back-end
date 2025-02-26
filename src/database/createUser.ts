import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function createStudent() {
  configDotenv();
  const uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = await client.db("food-delivery");
    const collection = database.collection("foods");
    await collection.insertOne({
      name: "anton",
      age: "23",

      gpa: "2.8",
    });
    const students = collection.find().toArray();
    return students;
  } catch (error) {
    console.log("Error", error);
  }
}
