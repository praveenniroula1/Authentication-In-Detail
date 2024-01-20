import sessionSchema from "./sessionSchema.js";

export const insertSession = (obj) => {
  return sessionSchema(obj).save();
};
export const getSession = (email) => {
  return sessionSchema.findOne(email);
};

export const deleteSession = (authorization) => {
  return sessionSchema.deleteOne({ authorization });
};
