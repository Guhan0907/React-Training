import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", 
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Global Request Interceptor triggered");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Global Response Interceptor triggered");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
