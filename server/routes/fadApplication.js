import { Router } from "express";
import { saveFadApplication } from "../controllers/fadApplication.js";

const router = Router();

router.post("/", saveFadApplication);

export default router;
