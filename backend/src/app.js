// backend/src/app.js
const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const routes  = require('./routes/index.js');

const app = express();
app.use(cors(), morgan('dev'), express.json());
app.use('/api', routes);
app.get('/', (_,res) => res.send('API funcionando 🚀'));
module.exports = app;
