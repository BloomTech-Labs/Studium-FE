import Cookies from 'universal-cookie';

export const getCookies = () => {
  return new Cookies();
};