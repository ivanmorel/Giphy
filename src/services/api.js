import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
