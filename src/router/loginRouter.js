import express from "express";
const router = express.Router();
import { loginController } from "../controllers/loginController.js";

// routes
router.route("/").post(loginController);

export default router;
