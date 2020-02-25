
import axios from 'axios';

/**
 *
 * @returns {AxiosInstance}
 */
export const createAxios = () => {
  return axios.create( {
    baseURL: process.env.REACT_APP_BASE_URL,
  } );
};

/**
 *
 * @param uid
 * @returns {AxiosInstance}
 */
export const createAxiosAuth = ( uid ) => {
  return axios.create( {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: { 'Auth': uid },
  } );
};