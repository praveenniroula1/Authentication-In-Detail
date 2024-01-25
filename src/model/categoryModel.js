import categorySchema from "../schema/categorySchema.js";

export const insertCategory = (obj) => {
  return categorySchema(obj).save();
};

export const updateCategory = (filter, update) => {
  return categorySchema.findOneAndUpdate(filter, update, { new: true });
};

export const getAllCategory = () => {
  return categorySchema.find();
};

export const deleteCategoryById = () => {
  return categorySchema.findOneAndDelete();
};
