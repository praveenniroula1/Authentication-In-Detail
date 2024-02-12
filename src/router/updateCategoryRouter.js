import express from "express";
import { updateCategoryController } from "../controllers/updateCategoryController.js";
const router = express.Router();

router.route("/").patch(updateCategoryController);

export default router;
