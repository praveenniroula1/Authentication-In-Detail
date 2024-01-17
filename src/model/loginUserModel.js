import registerUserSchema from "../schema/registerUserSchema.js";

export const findExistingUser = (email) => {
  return registerUserSchema.findOne({ email });
};
