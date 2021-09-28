import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_DB_URL,
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
