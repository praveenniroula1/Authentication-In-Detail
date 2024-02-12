import express from "express";
const router = express.Router();

import { userValidation } from "../server-side-validation/joiValidation.js";
import {
  postRegisterController,
  verifyEmailController,
} from "../controllers/registerController.js";

// Define your route
router.route("/").post(userValidation, postRegisterController);
router.route("/verify-email").get(verifyEmailController);

export default router;
