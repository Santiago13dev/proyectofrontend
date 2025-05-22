// server.js
require('dotenv').config();        
const app = require('./src/app');  // debe ser tu instancia de Express

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
