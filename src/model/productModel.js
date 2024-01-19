import productSchema from "../schema/productSchema.js";

export const insertProduct = (obj) => {
  return productSchema(obj).save();
};

export const findAllProduct = () => {
  return productSchema.find();
};

export const findProductById = (_id) => {
  return productSchema.findById(_id);
};

export const updateProduct = (filter, update) => {
  return productSchema.findByIdAndUpdate(filter, update, { new: true });
};

export const deleteProductById = (_id) => {
  return productSchema.findByIdAndDelete(_id);
};
