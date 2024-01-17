import Joi from "joi";

export const userValidation = (req, res, next) => {
  const schema = Joi.object({
    fName: Joi.string().max(10).required(),
    lName: Joi.string().max(10).required(),
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json({ message: error.message });
  }

  next();
};
