import apiBeta from "../../services/betaAPI";

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
const registerAPI = async (data: RegisterData): Promise<RegisterResponse | null> => {
    try {
        const response = await apiBeta.post<RegisterResponse>("/users", data);
        console.log("Usuário cadastrado com sucesso:", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        return null;
    }
};

export default registerAPI;
