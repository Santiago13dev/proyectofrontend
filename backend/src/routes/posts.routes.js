// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener posts' });
  }
});

module.exports = router;
