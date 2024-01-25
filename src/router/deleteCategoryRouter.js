import express from "express";
import { deleteCategoryById } from "../model/categoryModel.js";
const router = express.Router();

router.delete("/", async (req, res) => {
  try {
    const { _id } = req.body;
    const deleteCategory = await deleteCategoryById(_id);
    if (deleteCategory) {
      return res.json({
        status: "success",
        message: "Category has been successfully deleted",
      });
    } else {
      return res.json({
        status: "error",
        message: "Failed to delete the category",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
