import axios from 'axios';

const baseURL = process.env.REACT_NATIVE_APP_BOT_API_URL || '';
const Authorization = process.env.REACT_NATIVE_APP_BOT_DEFAULT_TOKEN || '';

export const botApi = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${Authorization}`,
        ContentType: 'application/json'
    }
})