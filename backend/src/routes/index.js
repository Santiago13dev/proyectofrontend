// backend/src/routes/index.js
const express = require('express');
const axios   = require('axios');
const postsRoutes = require('./posts.routes');

const router = express.Router();

// Proxy de posts
router.use('/posts', postsRoutes);

// Usuarios
router.get('/users', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

// Álbumes
router.get('/albums', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums');
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: 'Error al obtener álbumes' });
  }
});

// Tareas
router.get('/todos', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
});

module.exports = router;
