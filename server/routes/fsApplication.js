import { Router } from "express";
import { saveFsApplication } from "../controllers/fsApplication.js";

const router = Router();

router.post("/", saveFsApplication);

export default router;
