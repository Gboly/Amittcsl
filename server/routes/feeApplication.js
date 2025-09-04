import { Router } from "express";
import { saveFeeApplication } from "../controllers/feeApplication.js";

const router = Router();

router.post("/", saveFeeApplication);

export default router;
