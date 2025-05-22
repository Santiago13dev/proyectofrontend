// src/routes/index.js
const express = require('express');
const router = express.Router();
const postsRoutes = require('./posts.routes');

router.use(postsRoutes); // monta en /api/posts porque en app.js lo enlazas así

module.exports = router;
