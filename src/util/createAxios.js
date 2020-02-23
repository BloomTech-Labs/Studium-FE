import axios from 'axios';

export const createAxios = ( ) => {
  return axios.create( {
    baseURL: process.env.REACT_APP_BASE_URL,
  } );
};

export const createAxiosAuth = (uid) => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, timeout: 1000, headers: {'Auth': uid},
  })
}