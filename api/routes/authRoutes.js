const express = require('express');
const { signUp, login, logout } = require('../controllers/authControllers');
const protectedRoute = require('../middleware/auth');

const router = express.Router();

router.post('/signUp', signUp);
router.post('/login', login);
router.post('/logout', logout);

router.get("/me", protectedRoute, (req, res) => {
    res.send({
        success: true,
        user: req.user
    })
})

module.exports = router;