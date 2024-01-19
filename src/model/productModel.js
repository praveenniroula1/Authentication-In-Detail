import productSchema from "../schema/productSchema.js";

export const insertProduct = (obj) => {
  return productSchema(obj).save();
};
