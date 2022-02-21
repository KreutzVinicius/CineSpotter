
import axios from "axios";

const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbmkiLCJpYXQiOjE2NDUxOTc1MjcsImV4cCI6MTY0NTI4MzkyNywic3ViIjoiYWY3NTk3ODktYTU4Yy00NzYxLWE1MGItNzM3ODVkZTc5NmM4In0.Iuemb1Q5alKNYtDcCe2tzmCp25GoMCpF8U5hH4xJEZ0";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json',
        responseType: "json",
    }
});

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authtoken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token1}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


export default api