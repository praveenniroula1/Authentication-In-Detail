import express from "express";
import { updateCategory } from "../model/categoryModel.js";
const router = express.Router();

router.patch("/", async (req, res) => {
  try {
    const { _id, name, children } = req.body;
    const updatedCategory = await updateCategory(
      { _id },
      {
        name: name,
        children: children,
      }
    );
    if (updatedCategory?._id) {
      return res.json({
        status: "success",
        message: "Your category has been successfully updated.",
      });
    } else {
      return res.json({
        status: "error",
        message: "Your category update has been failed.",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
