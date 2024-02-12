import express from "express";
import { changePasswordController } from "../controllers/changePasswordController.js";
const router = express.Router();

// routes
router.route("/").post(changePasswordController);

export default router;
