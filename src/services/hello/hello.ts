import api from '../api';

const helloWorld = () => {
    return api.get('/');
}

export default {
    helloWorld
}