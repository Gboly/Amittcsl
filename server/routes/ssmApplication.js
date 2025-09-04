import { Router } from "express";
import { saveSsmApplication } from "../controllers/ssmApplication.js";

const router = Router();

router.post("/", saveSsmApplication);

export default router;
