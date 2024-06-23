import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_END_POINT || 'https://landing-page-api-jy99.onrender.com/api'
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
        config.withCredentials = true;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
