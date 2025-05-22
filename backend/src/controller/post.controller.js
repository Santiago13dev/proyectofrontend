const axios = require('axios');

exports.getAllPosts = async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener los posts:', error.message);
    res.status(500).json({ message: 'Error al obtener los posts' });
  }
};
