import axios from 'axios';

const baseURL = process.env.EXPO_BASE_URL_API || '';

const api = axios.create({
    baseURL
})

export default api;