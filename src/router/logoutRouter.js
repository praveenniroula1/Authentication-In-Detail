import express from "express";
import { deleteSession } from "../session/sessionModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    if (authorization) {
      const dataToDelete = await deleteSession(authorization);
      return res.json({
        status: "success",
        message: "successfully deleated the session",
      });
    }
    return res.json({
      status: "error",
      message: "Could not delete the session",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
