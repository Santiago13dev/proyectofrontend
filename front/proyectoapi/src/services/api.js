// front/proyectoapi/src/services/api.js
import axios from 'axios';

const ENDPOINTS = {
  Posts:    '/api/posts',
  Usuarios: '/api/users',
  Álbumes:  '/api/albums',
  Tareas:   '/api/todos'
};


export async function fetchData(tab) {
  const url = ENDPOINTS[tab];
  if (!url) return [];
  const { data } = await axios.get(url, {
    headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' }
  });
  return data;
}