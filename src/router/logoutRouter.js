import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    return res.json({
      status: "success",
      message: "Yet to do",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
