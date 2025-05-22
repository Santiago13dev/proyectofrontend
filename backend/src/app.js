// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas proxy a JSONPlaceholder
app.use('/api/posts', routes);

// Ruta home
app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

module.exports = app;  // <- IMPORTANTE: exporta la instancia
