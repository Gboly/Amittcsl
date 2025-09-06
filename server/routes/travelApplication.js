import { Router } from "express";
import { saveTravelApplication } from "../controllers/travelApplication.js";

const router = Router();

router.post("/", saveTravelApplication);

export default router;
