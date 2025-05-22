// front/proyectoapi/src/services/api.js
import axios from 'axios';
const ENDPOINTS = {
  Posts:    '/api/posts',
  Usuarios: '/api/users',
  Álbumes:  '/api/albums',
  Tareas:   '/api/todos'
};

export function fetchData(tab) {
  const url = ENDPOINTS[tab];
  if (!url) return Promise.resolve([]);
  return axios.get(url).then(res => res.data);
}
