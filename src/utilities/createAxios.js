import axios from 'axios';

/**
 * Create axios request
 * @returns {AxiosInstance}
 */
export const createAxios = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
};

/**
 * Create Axious with auth header attached.
 * @param uid
 * @returns {AxiosInstance}
 */
export const createAxiosAuth = uid => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: { auth: uid },
  });
};
