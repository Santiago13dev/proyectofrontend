// backend/src/routes/posts.routes.js
const express = require('express');
const axios   = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: 'Error al obtener posts' });
  }
});

module.exports = router;
