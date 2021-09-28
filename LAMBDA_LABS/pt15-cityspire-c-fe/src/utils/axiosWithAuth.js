import axios from 'axios';

export const axiosWithAuth = () => {
  const oktaTokenStorage = JSON.parse(
    localStorage.getItem('okta-token-storage')
  );
  const token = 'Bearer ' + oktaTokenStorage.idToken.value;

  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_API,
    headers: {
      Authorization: token,
    },
  });
};
