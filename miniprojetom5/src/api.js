import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-mentalwellness.onrender.com'
})

export default api;


