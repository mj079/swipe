const express = require('express');
const protectedRoute = require('../middleware/auth');
const { sendMessage, getConversation } = require('../controllers/messageControllers');

const router = express.Router();

router.use(protectedRoute);

router.post('/send', sendMessage);
router.get('/conversation/:userId', getConversation);

module.exports = router
