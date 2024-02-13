import { CategoryRepository } from "../repository/categoryRepository.js";

export const categoryService = {
  insertCategory: (data) => {
    const insertedCategory = CategoryRepository.insertCategory(data);
    return insertedCategory;
  },
  updateCategory: (filter, update) => {
    const updatedCategory = CategoryRepository.updateCategory(filter, update);
    return updatedCategory;
  },
  getAllCategory: () => {
    const allFetchedCategory = CategoryRepository.getAllCategory();
    return allFetchedCategory;
  },
  deleteCategory: (_id) => {
    const deletedCategory = CategoryRepository.deleteCategoryById(_id);
    return deletedCategory;
  },
};
