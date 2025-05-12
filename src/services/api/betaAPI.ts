import axios from "axios";
import store from "../../redux/store"; // Ajuste o caminho conforme a estrutura do seu projeto

const apiBeta = axios.create({
    baseURL: import.meta.env.VITE_BETA_BASE_URL,
    timeout: 2000,
    headers: {
        "Content-Type": "application/json"
    }
});

// Interceptor para adicionar o token em todas as requisições
apiBeta.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiBeta;
