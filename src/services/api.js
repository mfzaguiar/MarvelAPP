import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

api.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    apikey: '47d39e9918df2fed3c491f76b35abae9',
    hash: 'aee24d2cdc988de0c45dcd12c4edd2b2',
    ts: '1573593206609',
  };
  return config;
});

export default api;
