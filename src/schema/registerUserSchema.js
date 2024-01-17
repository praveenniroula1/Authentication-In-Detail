import mongoose from "mongoose";

const registerUserSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    emailValidationCode: {
      type: String,
      default: "",
    },
    refreshJWT: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Registered-User", registerUserSchema);
