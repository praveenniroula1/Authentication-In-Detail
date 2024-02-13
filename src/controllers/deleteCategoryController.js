import { categoryService } from "../services/categoryService.js";

export const deleteCategoryController = async (req, res) => {
  try {
    const { _id } = req.body;
    const deleteCategory = await categoryService.deleteCategory(_id);
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
};
