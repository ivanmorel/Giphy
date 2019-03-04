import api from './api';

const apiKey = 'sI0kIyrDj9XidPAfohtSIPRbyTanurGr';

export default {
  fetchGifs: (q, limit) => api.get(`search?api_key=${apiKey}&q=${q}&limit=${limit}&offset=0&rating=G&lang=en`),
};
