import express from "express";
import ProductModel from "./ProductModel.js";
// import { db } from "./index.js";
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
    upload.single("image"),
    async (req, res) => {
      const { name, price, category, company } = req.body;
      const image = req.file;
    const productToAdd  = new ProductModel({name, price, category, company,image})
      let result = await productToAdd.save()
      res.json(result)
  
    }
  );
  
ProductRouter.get("/", async(req , res)=>{
let result = await ProductModel.find()
res.json(result)
})



export default ProductRouter