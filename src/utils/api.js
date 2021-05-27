import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    headers: {
        'Conten-Type': 'application/json',
        'BaseURL': 'http://127.0.0.1/5000',
    }
    
})

export default api;