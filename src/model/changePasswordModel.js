import registerUserSchema from "../schema/registerUserSchema.js";

export const findUser = (email) => {
  return registerUserSchema.findOne({ email });
};

export const changePassword = (filter, update) => {
  return registerUserSchema.findOneAndUpdate(filter, update, { new: true });
};
