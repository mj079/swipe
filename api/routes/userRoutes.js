const express = require('express');
const protectedRoute = require('../middleware/auth');
const updateProfile = require('../controllers/userController')

const router = express.Router();

router.put('/update', protectedRoute, updateProfile)

module.exports = router
