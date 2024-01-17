import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    expires: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Session", sessionSchema);
