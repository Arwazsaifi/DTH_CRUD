import { UserController } from "../controllers/user";

const express = require('express')
let router = express.Router();

router.post('/register',UserController.register)
router.post('/login',UserController.login)

export default router;