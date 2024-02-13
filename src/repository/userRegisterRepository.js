import registerUserSchema from "../schema/registerUserSchema.js";

export const UserRegisterRepository = {
  insertUser: (obj) => {
    return registerUserSchema(obj).save();
  },

  updateUser: (filter, update) => {
    return registerUserSchema.findOneAndUpdate(filter, update, { new: true });
  },

  findOneUser: (email) => {
    return registerUserSchema.findOne(email);
  },
};
