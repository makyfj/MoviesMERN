import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// env file
dotenv.config();

// mongoose
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Movies");
});

// Port
const PORT = process.env.PORT || 5000;

// run sever
app.listen(PORT, console.log(`Server running on port ${PORT}`));
