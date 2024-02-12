import express from "express";
import { deleteCategoryController } from "../controllers/deleteCategoryController.js";
const router = express.Router();

router.route("/").delete(deleteCategoryController);

export default router;
