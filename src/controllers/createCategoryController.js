import { categoryService } from "../services/categoryService.js";

export const createCategoryController = async (req, res) => {
  try {
    console.log(req.body);
    const addCategory = await categoryService.insertCategory(req.body);
    if (addCategory?._id) {
      return res.json({
        status: "success",
        message: "Your category has been created",
        addCategory,
      });
    } else {
      return res.json({
        status: "error",
        message: "Failed to create category",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
