import express from "express";
import { insertProduct } from "../model/productModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
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
