import express, { application } from "express";
import dotenv from "dotenv";
//import  products  from './data/products.js'
import connectDB from "./config/db.js";
//import User from './models/userModel.js'
//import Product from './models/productModel.js'
import productRoutes from "./routes/productRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
const app = express();
dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`Server is running in ${process.env.NODE_ENV} on port  ${port}`)
);
