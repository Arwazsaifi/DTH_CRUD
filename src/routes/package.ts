import { PackageController } from "../controllers/package";
const express = require('express')
let router = express.Router();

router.post('/',PackageController.addPackage)
router.get('/',PackageController.getAllPackages)


export default router;