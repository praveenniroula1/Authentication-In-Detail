import categorySchema from "../schema/categorySchema.js";

export const CategoryRepository = {
  insertCategory: (obj) => {
    return categorySchema(obj).save();
  },
  updateCategory: (filter, update) => {
    return categorySchema.findOneAndUpdate(filter, update, { new: true });
  },
  getAllCategory: () => {
    return categorySchema.find();
  },
  deleteCategoryById: () => {
    return categorySchema.findOneAndDelete();
  },
};
