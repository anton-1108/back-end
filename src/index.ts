import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import { createStudent } from "./database/createUser";
import { getStudent } from "./database/mongoDb";
const app = express();

app.use(bodyParser.json());
configDotenv();
const port = process.env.PORT;

app.get("/foods", async (req, res) => {
  try {
    const students = await getStudent();
    res.status(200).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});
app.post("/foods", async (req, res) => {
  try {
    const students = await createStudent();
    res.status(200).json({ message: "Sucess" });
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
