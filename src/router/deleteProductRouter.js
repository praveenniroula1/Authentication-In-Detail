import express from "express";
import { deleteProductController } from "../controllers/deleteProductController.js";
const router = express.Router();

router.route("/").delete(deleteProductController);

export default router;
