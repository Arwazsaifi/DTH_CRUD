import { ChannelController } from "../controllers/channel";
const express = require('express')
let router = express.Router();

router.post('/',ChannelController.addChannel)
router.get('/',ChannelController.getAllChannels)


export default router;