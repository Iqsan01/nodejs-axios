import { Router } from "express";
import { getJobId, getListJob } from "../controllers/job.controller.js";

const router = Router();

router.get('/job-list', getListJob)
router.get('/job-list/:id', getJobId)

export default router;