const express = require('express');
const protectedRoute = require('../middleware/auth');
const { swipeRight, swipeLeft, getMatches, getUserProfiles } = require('../controllers/matchControllers');

const router = express.Router();

router.post('/swipe-right/:likedUserId', protectedRoute , swipeRight);
router.post('/swipe-left/:dislikedUserId', protectedRoute , swipeLeft);

router.get('/', protectedRoute, getMatches);
router.get('/user-profiles', protectedRoute, getUserProfiles);

module.exports = router

