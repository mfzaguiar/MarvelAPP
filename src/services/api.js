import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

api.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    apikey: '',
    hash: '',
    ts: '',
  };
  return config;
});

export default api;
