import express from "express";
const router = express.Router();
import { updatedPasswordController } from "../controllers/forgotPasswordController.js";
import { forgotPasswordController } from "../controllers/forgotPasswordController.js";

router.route("/").post(forgotPasswordController);
router.route("/changed").get(updatedPasswordController);

export default router;
