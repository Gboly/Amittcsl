import { Router } from "express";
import { saveCoursesApplication } from "../controllers/coursesApplication.js";

const router = Router();

router.post("/", saveCoursesApplication);

export default router;
