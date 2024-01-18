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
  },
  { timestamps: true }
);

export default mongoose.model("Session", sessionSchema);
