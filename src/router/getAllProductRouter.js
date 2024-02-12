import express from "express";
import { getAllProductController } from "../controllers/getAllProductController.js";
const router = express.Router();

router.route("/").get(getAllProductController);

export default router;
