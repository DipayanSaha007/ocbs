// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Sign-In route
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // Generate a token (for session or future requests)
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

  // Respond with the token and user details
  res.json({
    message: 'Login successful',
    token,
    user: { username: user.username, email: user.email },
  });
});

module.exports = router;
