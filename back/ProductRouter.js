import express from "express";
import ProductModel from "./ProductModel.js";
import { db } from "./index.js";
import multer from "multer";
import path from "path";

const ProductRouter = express.Router()


const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, callback) {
      const ext = path.extname(file.originalname);
      const filename = req.body.name + ext;
      callback(null, filename);
    },
  })
  const upload = multer({ storage: storage });
  
  ProductRouter.post("/add",
    upload.single("profilePicture"),
    async (req, res) => {
      const { name, price, category, company } = req.body;
      const profilePicture = req.file;
  
      db.collection("studentRecords")
        .insertOne({ name, price, category,company, profilePicture })
        .then((result) => {
          res.status(201).send("User inserted successfully");
          
        })
        .catch((err) => {
          res.status(500).send("Internal Server Error");
        });
  
    }
  );
  
ProductRouter.get("/", async(req , res)=>{
let result = await ProductModel.find()
res.json(result)
})

// ProductRouter.post("/add" , async(req, res)=>{
//     const ProductRegister = new ProductModel(req.body)
// let Addproduct = await ProductRegister.save()
// // console.log(Addproduct)
// res.json(Addproduct)
// })



export default ProductRouter