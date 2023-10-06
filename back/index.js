import express  from "express";
import cors from 'cors'
import mongoose from "mongoose";
import ProductRouter from "./ProductRouter.js";
import UserRouter from "./UserRouter.js";
import AdminRouter from'./AdminRouter.js'
// import multer from "multer";
// import path from "path"
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


const app = express()


const connection = mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
app.use(cors())
app.use('/uploads', express.static('uploads'))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json())

app.use('/product' , ProductRouter)
app.use('/user',UserRouter)
app.use('/admin' ,AdminRouter)

connection
  .then((client) => {
    // db = client.db("product");
    app.listen(8000, () => console.log("Server started at 8000 "));
  })
  .catch((err) => console.log("DB ERROR: " + err));