import apiBeta from "../../services/betaAPI";

// Informações esperadas pelo retorno da API:
interface RegisterResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    updateAt: string;
    createdAt: string;
};

// Informações passadas para API para criarmos um usuário:
interface RegisterData {
    name: string;
    email: string;
    password: string;
};

// Rota de cadastro de usuário:
const registerAPI = async (data:RegisterData): Promise<string | null>=>{
    try{
        const response = await apiBeta.post<RegisterResponse>("/users", data);
        console.log('Data: ', response);
        return response.statusText;

    }catch(e){
        console.log('erro: ', e)
        return null;
    }

};

export default registerAPI;
