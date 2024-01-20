import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
  thumbnail: {
    type: String,
  },
});

export default mongoose.model("Products", productSchema);
