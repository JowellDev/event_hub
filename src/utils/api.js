import axios from 'axios';

const res = localStorage.getItem('token');

const token = res ?? null;

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    headers: {
        'Conten-Type': 'application/json',
        'BaseURL': 'http://127.0.0.1/5000',
        'Authorization': `Bearer ${token}`,
    }
    
})

export default api;