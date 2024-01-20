import express from "express";
import { findAllProduct } from "../model/productModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allProduct = await findAllProduct();
    if (allProduct) {
      return res.json({
        status: "success",
        message: "All the products are fetched",
        allProduct,
      });
    } else {
      return res.json({
        status: "error",
        message: "Failed to fetched the products",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
