import { Router } from "express";
import { contactTeam } from "../controllers/contact.js";

const router = Router();

router.post("/", contactTeam);

export default router;
