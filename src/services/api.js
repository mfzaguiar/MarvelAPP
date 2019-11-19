import axios from 'axios';
import {API_KEY, HASH} from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

api.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    apikey: API_KEY,
    hash: HASH,
    ts: '1573593206609',
  };
  return config;
});

export default api;
