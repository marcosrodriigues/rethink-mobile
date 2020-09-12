import axios from 'axios';
import { SAFRA_API_URL } from "react-native-dotenv";

const baseURL = SAFRA_API_URL || '';

const api = axios.create({
    baseURL
})

export default api;