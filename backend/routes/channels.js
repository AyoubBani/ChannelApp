const express = require('express');

const channelController = require('../controllers/channels');

const router = express.Router();

// GET CHANNELS
router.get('/channels', channelController.getChannels);

// GET MESSAGES
router.get('/messages/:channel', channelController.getMessages);

//ADD MESSAGE TO CHANNEL (UPDATE CHANNEL)
router.put('/:channel', channelController.addMessage);
module.exports = router;
