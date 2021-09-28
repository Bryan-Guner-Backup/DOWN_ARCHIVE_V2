import axios from 'axios';

export const axiosWithAuth = () => {
  const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
  return axios.create({
    baseURL: 'https://encon-be.herokuapp.com/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH_TOKEN,
    },
  });
};
