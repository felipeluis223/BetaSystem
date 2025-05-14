import { AxiosResponse } from "axios";
import apiBeta from "../../betaAPI";

// Informações esperadas pelo retorno da API:
interface RegisterResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    updatedAt: string;
    createdAt: string;
}

// Informações passadas para API para criarmos um usuário:
interface RegisterData {
    name: string;
    email: string;
    password: string;
}

// Rota de cadastro de usuário:
const createUser = async (data: RegisterData): Promise<AxiosResponse<RegisterResponse> | null> => {
    try {
        const response = await apiBeta.post<RegisterResponse>("/users", data);
        return response;
    } catch (error) {
        return error;
    }
};

export default createUser;
