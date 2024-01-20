import express from "express";
import { insertProduct } from "../model/productModel.js";
import multer from "multer";
const router = express.Router();
import fs from "fs";

//setup multer for validaton and upload destination
const filUploadDestination = "public/img/products";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;
    cb(error, filUploadDestination);
  },
  filename: (req, file, cb) => {
    const fullFileName = Date.now() + "-" + file.originalname;
    cb(null, fullFileName);
  },
});

const upload = multer({ storage });

router.post("/", upload.array("images", 5), async (req, res) => {
  try {
    const files = req.files;
    if (files.length) {
      const images = files.map((img) => img.path.slice(6));

      req.body.images = images;
      req.body.thumbnail = images[0];
    }
    const sku = Math.floor(100000 + Math.random() * 900000);
    req.body.sku = sku;
    const product = await insertProduct(req.body);
    if (product?._id) {
      res.json({
        status: "success",
        message: "Successfully Created the product",
        product,
      });
    } else {
      return res.json({
        status: "error",
        message: "Failed to Created the product",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
