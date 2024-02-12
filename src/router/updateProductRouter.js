import express from "express";
import { updateProductController } from "../controllers/updateProductController.js";
const router = express.Router();

router.route("/").patch(updateProductController);

export default router;
