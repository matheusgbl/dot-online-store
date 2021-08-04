import axios from 'axios';
const key = '02e8b35def595ca263a687a353b4b1c7';

const api = axios.get(`https://api.themoviedb.org/3/list/20?api_key=${key}`)

export default api;
