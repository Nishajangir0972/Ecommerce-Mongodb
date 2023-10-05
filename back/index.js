import express  from "express";
import cors from 'cors'
import mongoose from "mongoose";
import ProductRouter from "./ProductRouter.js";
const app = express()

export let db;
const connection = mongoose.connect("mongodb://127.0.0.1:27017")
app.use(cors())
app.use(express.json())

app.use('/product' , ProductRouter)

connection
  .then((client) => {
    db = client.db("product");
    app.listen(8080, () => console.log("Server started at 8080 "));
  })
  .catch((err) => console.log("DB ERROR: " + err));