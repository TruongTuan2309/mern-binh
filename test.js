import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import productRouters from "./routes/productRoutes.js";
dotenv.config();
connectDB();
const app = express();

app.use((req, res, next) => {
  console.log("Hello");
  next();
});

app.get("/", (req, res) => {
  res.send("API is running ....");
});
app.use("/api/products", productRouters);
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

const URI = process.env.MONGO_URI;
console.log("URI", URI);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
