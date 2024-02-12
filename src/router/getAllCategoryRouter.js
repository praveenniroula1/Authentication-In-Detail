import express from "express";
import { getAllCategoryController } from "../controllers/getAllCategoryController.js";
const router = express.Router();

router.route("/").get(getAllCategoryController);

export default router;
