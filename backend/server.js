// backend/server.js
require('dotenv').config();

const app = require('./src/app.js');

// 1) Desactiva la generación de ETags
app.disable('etag');

// 2) Middleware global para evitar cualquier cacheo
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
