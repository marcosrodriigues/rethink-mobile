import axios from 'axios';

const baseURL = process.env.REACT_NATIVE_APP_SAFRA_API_URL || '';

const api = axios.create({
    baseURL
})

export default api;