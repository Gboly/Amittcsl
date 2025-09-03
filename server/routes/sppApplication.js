import { Router } from "express";
import { saveSppApplication } from "../controllers/sppApplication.js";

const router = Router();

router.post("/", saveSppApplication);

export default router;
