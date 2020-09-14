import axios from 'axios';

const baseURL = process.env.REACT_NATIVE_APP_BASE_API_URL || '';
console.log("baseURL: ", baseURL)
const api = axios.create({
    baseURL
})

export default api;