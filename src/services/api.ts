import axios from 'axios';
import { BASE_URL_API } from "react-native-dotenv";

const baseURL = BASE_URL_API || '';

const api = axios.create({
    baseURL
})

export default api;