import axios from 'axios';

/**
 * Create axios request
 * @function
 * @name createAxios
 * @returns AxiosInstance
 */
export const createAxios = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
};

/**
 * Create Axious with auth header attached.
 * @function
 * @name createAxiosAuth
 * @param {string} uid
 * @returns AxiosInstance
 */
export const createAxiosAuth = uid => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: { auth: uid },
  });
};

/**
 * @typedef {object} AxiosInstance
 * @property {function} get
 * @property {function} delete
 * @property {function} post
 * @property {function} update
 */