const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Blog = require('../models/Blog');

const JWT_SECRET = 'your_secret_key';

// Create blog (requires authentication)
router.post('/', authenticateUser, async (req, res) => {
  try {
    const { title, description, tags, body } = req.body;
    const userId = req.userId;
    const blog = await Blog.create({ title, description, author: userId, tags, body,readcount, readtime, state });
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Middleware to authenticate user
function authenticateUser(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });
    req.userId = decodedToken.userId;
    next();
  });
}

module.exports = router;
