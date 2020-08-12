import axios from 'axios';

const port = process.env.PORT || 3333

const api = axios.create({
    baseURL: 'http://localhost:'.concat(port.toString()),
});

export default api;