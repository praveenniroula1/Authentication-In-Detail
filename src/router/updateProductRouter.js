import express from "express";
import { findProductById, updateProduct } from "../model/productModel.js";
const router = express.Router();

router.patch("/", async (req, res) => {
  try {
    const { _id, name, category, description, price } = req.body;
    const productToUpdate = await findProductById(_id);
    if (productToUpdate?._id) {
      const productUpdate = await updateProduct(
        { _id },
        {
          name: name,
          category: category,
          description: description,
          price: price,
        }
      );
      return res.json({
        status: "success",
        message: "All products has been updated successfully",
        productUpdate,
      });
    } else {
      return res.json({
        status: "error",
        message: "Product update failed",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
