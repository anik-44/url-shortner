import axios from 'axios';

const serverLocal = 'http://localhost:5000';
const serverBaseUrl = import.meta.env.VITE_APP_URI;

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === 'production' ? serverBaseUrl : serverLocal,
});
export default axiosInstance;
