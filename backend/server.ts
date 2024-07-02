import { Request, Response, NextFunction } from "express";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json("Hi, your application is running...");
});

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server started on PORT --${PORT}`)!);
