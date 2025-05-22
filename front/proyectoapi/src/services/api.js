// front/proyectoapi/src/services/api.js
import axios from 'axios';
const ENDPOINTS = {
  Posts: '/api/posts',
  Usuarios: '/api/users',
  Álbumes: '/api/albums',
  Tareas: '/api/todos'
};
export function fetchData(tab) {
  return axios.get(ENDPOINTS[tab]).then(r => r.data);
}
