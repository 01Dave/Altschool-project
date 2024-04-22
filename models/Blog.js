const User = require('../models/User');
// Blog.js
 const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: User , required: true },
  tags: [String],
  state: { type: String },
  readcount: { type: String },
  readtime: { type: String },
  body: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
