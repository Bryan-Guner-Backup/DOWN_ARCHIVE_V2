import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
    baseURL: process.env.REACT_APP_NUTRIVURV_API,
  });
};
