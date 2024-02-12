import express from "express";
const router = express.Router();
import { postProductController } from "../controllers/productController.js";

router.route("/").post(postProductController);

export default router;
