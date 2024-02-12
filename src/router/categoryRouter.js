import express from "express";
import { createCategoryController } from "../controllers/createCategoryController.js";
const router = express.Router();

router.route("/").post(createCategoryController);

export default router;
