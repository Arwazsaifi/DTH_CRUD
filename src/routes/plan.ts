import { PlanController } from "../controllers/plan";

const express = require('express')
let router = express.Router();

router.post('/',PlanController.addPlan)
router.get('/',PlanController.getAllplans)

export default router;