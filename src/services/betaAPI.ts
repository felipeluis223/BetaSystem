import axios from "axios";

const apiBeta = axios.create({
    baseURL: import.meta.env.VITE_BETA_BASE_URL,
    timeout: 2000,
    headers: {
        "Content-type": "application/json"
    } 
});

export default apiBeta;