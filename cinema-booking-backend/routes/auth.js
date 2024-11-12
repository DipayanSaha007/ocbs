const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

// Route to handle user registration
router.post('/signup', signup);

// Route to handle user login
router.post('/signin', signin);

module.exports = router;
