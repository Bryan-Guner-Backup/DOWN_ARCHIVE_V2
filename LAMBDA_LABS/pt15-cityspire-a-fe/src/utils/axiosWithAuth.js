import axios from 'axios';

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('okta-token-storage')).idToken
    .value;
  return axios.create({
    baseURL: `https://labspt15-cityspire-a.herokuapp.com`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
};

export default axiosWithAuth;
