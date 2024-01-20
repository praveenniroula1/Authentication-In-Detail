import express from "express";
import { deleteSession } from "../session/sessionModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      await deleteSession(authorization);
      return res.json({
        status: "success",
        message: "successfully deleated the session",
      });
    }
    return res.json({
      status: "success",
      message: "Yet to do",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
