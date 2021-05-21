import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://omdbapi.com/'
});

export default Api;