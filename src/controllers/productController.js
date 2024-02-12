import { insertProduct } from "../model/productModel.js";
import multer from "multer";
import fs from "fs";

const fileUploadDestination = "public/img/products";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fileUploadDestination);
  },
  filename: (req, file, cb) => {
    const fullFileName = Date.now() + "-" + file.originalname;
    cb(null, fullFileName);
  },
});
const upload = multer({ storage });

export const postProductController = async (req, res) => {
  try {
    upload.array("images", 5)(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "File upload error" });
      }

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
          message: "Successfully created the product",
          product,
        });
      } else {
        return res.json({
          status: "error",
          message: "Failed to create the product",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
