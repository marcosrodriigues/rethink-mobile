import axios from 'axios';

const baseURL = process.env.EXPO_SAFRA_API_URL || '';

const api = axios.create({
    baseURL
})

export default api;