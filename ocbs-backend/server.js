// backend/server.js
const express = require('express');
const connectDB = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);  // Include sign-in route here

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
