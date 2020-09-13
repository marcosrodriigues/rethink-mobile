import axios from 'axios';

const apiBaseURL = process.env.REACT_NATIVE_APP_SAFRA_API_URL || '';
const loginBaseUrl = process.env.REACT_NATIVE_APP_SAFRA_LOGIN_URL || '';

export const apiSafra = axios.create({
    baseURL: apiBaseURL
})

export const apiLoginSafra = axios.create({
    baseURL: loginBaseUrl
})
