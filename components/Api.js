import axios from 'axios';

const api = axios.create({
    baseURL: 'www.omdbapi.com/?i=tt3896198&apikey=588a5524&'
});

export default api;