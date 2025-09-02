import { Router } from "express";
import {
  saveGiftApplication,
  // getApplication,
  // submitApplication,
} from "../controllers/giftsApplication.js";

const router = Router();

router.post("/", saveGiftApplication);
// router.post("/submit", submitApplication);
// router.get("/:id", getApplication);

export default router;
