import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandle } from "./middleWare/errormiddleWare.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
connectDB();
const app = express();

app.use(express.json())
app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send("API is running ....");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);


app.use(notFound);
app.use(errorHandle);
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);