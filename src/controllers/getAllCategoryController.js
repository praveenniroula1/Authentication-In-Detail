import { getAllCategory } from "../model/categoryModel.js";

export const getAllCategoryController = async (req, res) => {
  try {
    const allCategory = await getAllCategory();
    console.log(allCategory);
    if (allCategory) {
      return res.json({
        status: "success",
        message: "All the category are listed below",
        allCategory,
      });
    } else {
      return res.json({
        status: "error",
        message: "Failed to list All the category",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
