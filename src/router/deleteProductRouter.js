import express from "express";
import { deleteProductById } from "../model/productModel.js";
const router = express.Router();

router.delete("/", async (req, res) => {
  try {
    const { _id } = req.body;
    const productDelete = await deleteProductById(_id);
    if (productDelete) {
      return res.json({
        status: "success",
        message: "Successfully deleated the product",
      });
    } else {
      return res.json({
        status: "error",
        message: "Failed to deleat the product",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
