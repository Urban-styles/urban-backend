import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Urban Styles backend is running");
});

app.use("/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port", port));
