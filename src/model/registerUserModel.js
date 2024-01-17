import registerUserSchema from "../schema/registerUserSchema.js";

export const insertUser = (obj) => {
  return registerUserSchema(obj).save();
};
export const updateUser = (filter, update) => {
  return registerUserSchema.findOneAndUpdate(filter, update, { new: true });
};
