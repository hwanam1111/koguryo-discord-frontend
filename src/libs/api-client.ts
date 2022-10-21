import axios from 'axios';
import Cookies from 'universal-cookie';

const BACKEND_SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
const API_VERSION = process.env.REACT_APP_API_VERSION;

const baseApiClient = axios.create({
  baseURL: `${BACKEND_SERVER_URL}/${API_VERSION}`,
});

function apiClient({ ...options }) {
  baseApiClient.interceptors.request.use((request) => {
    const cookies = new Cookies();
    const token = cookies.get(process.env.JWT_COOKIE_NAME);

    if (token) {
      request.headers['x-jwt'] = token;
    }

    return request;
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    return Promise.reject(error);
  };

  return baseApiClient(options).then(onSuccess).catch(onError);
}

export default apiClient;
