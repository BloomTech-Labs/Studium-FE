import axios from 'axios';

/**
 * Create axios request
 *
 * @category Utilities
 * @function
 * @name createAxios
 * @returns AxiosInstance
 */
export const createAxios = () => {
  return axios.create( {
    baseURL: process.env.REACT_APP_BASE_URL,
  } );
};

/**
 * Create Axious with auth header attached.
 *
 * @category Utilities
 * @function
 * @name createAxiosAuth
 * @param {string} uid
 * @returns AxiosInstance
 */
export const createAxiosAuth = ( uid ) => {
  return axios.create( {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: { auth: uid },
  } );
};
