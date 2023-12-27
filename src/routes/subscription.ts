import { SubscriptionController } from "../controllers/subscription";
const express = require('express')
let router = express.Router();

router.post('/',SubscriptionController.addSubscription)
router.get('/',SubscriptionController.getAllSubscription)



export default router;