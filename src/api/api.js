import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
console.log('api', api);
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    const { headers } = config;
    if (token) {
      headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
