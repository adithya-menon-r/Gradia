import express from "express";
import { createTest, getTests, getTestById, submitTest, getHeatmapData, getSupportedLanguages } from "../controllers/testController.js";
import { getStudentTests } from "../controllers/studentAuthController.js";
import { getTeacherTests } from "../controllers/teacherAuthController.js";

const router = express.Router();

router.get("/get-languages", getSupportedLanguages);
router.post("/create-test", createTest);
router.get("/tests", getTests);
router.get("/student-tests", getStudentTests);
router.get("/teacher-tests", getTeacherTests);
router.post("/submit/:testId", submitTest);
router.get("/heatmap", getHeatmapData);
router.get("/:testId", getTestById);

export default router;