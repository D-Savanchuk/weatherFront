import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.t3.academy.dunice-testing.com/',
});
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
