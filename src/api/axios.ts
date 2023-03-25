import axios from "axios";

const BASE_URL = 'http://localhost:5555/graphql';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": 'application/json'
  }
});


axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;